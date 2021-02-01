let country_boundary;
let map;
let cities_fg;
let wikipedia_fg;
let country_code_global = "";
let country_name;
let lat;
let lng;

$(document).ready(function () {
  $("#country_info .card-body").css(
    "max-height",
    $(window).height() - 71 - 10 + "px"
  );

  let Esri_WorldStreetMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
    }
  );

  map = L.map("map", {
    attributionControl: false,
  }).setView([0, 0], 1.5);

  map.addLayer(Esri_WorldStreetMap);

  L.control.scale().addTo(map);
  map.zoomControl.setPosition("topright");

  country_boundary = new L.geoJson().addTo(map);

  cities_fg = new L.FeatureGroup();
  map.addLayer(cities_fg);

  wikipedia_fg = new L.FeatureGroup();
  map.addLayer(wikipedia_fg);

  get_country_codes();
  get_user_location();
});

function get_country_codes() {
  $.ajax({
    url: "php/getCountriesCode.php?",
    type: "GET",
    success: function (json) {
      let countries = JSON.parse(json);
      let option = "";
      for (country of countries) {
        option +=
          '<option value="' + country[1] + '">' + country[0] + "</option>";
      }
      $("#country_list").append(option).select2();
    },
  });
}

function get_user_location() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const {
          latitude
        } = position.coords;
        const {
          longitude
        } = position.coords;
        // const coords = [latitude, longitude];
        map.spin(true);
        $.ajax({
          url: "php/getCountryCodeFromLatLng.php?lat=" +
            latitude +
            "&lng=" +
            longitude +
            "&username=ShashAPI",
          type: "GET",
          success: function (json) {
            map.spin(false);
            json = JSON.parse(json); // Parse the string data to JavaScript object
            // console.log(json);
            const country_code = json.countryCode;
            $("#country_list").val(country_code).trigger("change");
          },
        });
      },
      function () {
        alert("Could not get your position!");
      }
    );
  }
}

function get_country_border(country_code) {
  $.ajax({
    url: "php/getCountryBorder.php",
    type: "GET",
    data: {
      country_code: country_code,
    },
    success: function (json) {
      json = JSON.parse(json);
      country_boundary.clearLayers();
      country_boundary.addData(json).setStyle(polystyle());
      const bounds = country_boundary.getBounds();
      map.fitBounds(bounds);

      const east = bounds.getEast();
      const west = bounds.getWest();
      const north = bounds.getNorth();
      const south = bounds.getSouth();
      get_nearby_cities(east, west, north, south);
      get_nearby_wikipedia(east, west, north, south);
    },
  });
}

function get_nearby_cities(east, west, north, south) {
  cities_fg.clearLayers();
  $.ajax({
    url: "php/getNearByCities.php",
    type: "GET",
    data: {
      east: east,
      west: west,
      north: north,
      south: south,
      username: "ShashAPI",
    },
    success: function (json) {
      json = JSON.parse(json);
      console.log(json);
      const data = json.geonames;
      const city_icon = L.ExtraMarkers.icon({
        icon: "fa-building",
        markerColor: "black",
        shape: "square",
        prefix: "fa",
      });
      for (let i = 0; i < data.length; i++) {
        const marker = L.marker([data[i].lat, data[i].lng], {
          icon: city_icon,
        }).bindPopup(
          "<b>" +
          data[i].name +
          "</b><br>Population: " +
          parseInt(data[i].population).toLocaleString("en")
        );
        cities_fg.addLayer(marker);
      }
    },
  });
}

function get_nearby_wikipedia(east, west, north, south) {
  wikipedia_fg.clearLayers();
  $.ajax({
    url: "php/getNearByWikipedia.php",
    type: "GET",
    data: {
      east: east,
      west: west,
      north: north,
      south: south,
      username: "ShashAPI",
    },
    success: function (json) {
      json = JSON.parse(json);
      console.log(json);
      const data = json.geonames;
      const wiki_icon = L.ExtraMarkers.icon({
        icon: "fa-wikipedia-w",
        markerColor: "blue",
        shape: "square",
        prefix: "fa",
      });
      for (let i = 0; i < data.length; i++) {
        const marker = L.marker([data[i].lat, data[i].lng], {
          icon: wiki_icon,
        }).bindPopup(
          "<img src='" +
          data[i].thumbnailImg +
          "' width='100px' height='100px' alt='" +
          data[i].title +
          "'><br><b>" +
          data[i].title +
          "</b><br><a href='https://" +
          data[i].wikipediaUrl +
          "' target='_blank'>Wikipedia Link</a>"
        );
        wikipedia_fg.addLayer(marker);
      }
    },
  });
}

function polystyle() {
  return {
    fillColor: "green",
    weight: 1,
    opacity: 0.1,
    color: "white", //Outline color
    fillOpacity: 0.6,
  };
}

function zoomToCountry(country_code) {
  if (country_code == "") return;
  country_name = $("#country_list option:selected").text();
  country_code_global = country_code;
  get_country_border(country_code);
  get_country_info(country_code);
}

function get_country_info(country_code) {
  if ($("#country_info").css("left") !== "5px") {
    $("#country_info").animate({
        left: "5px",
      },
      1000
    );
    $(".pull_country_info_popup").animate({
        left: "-40px",
      },
      1000
    );
  }
  map.spin(true, {
    top: 180,
    left: 150,
  });

  $.ajax({
    url: "php/getCountryInfo.php",
    type: "GET",
    data: {
      country_code: country_code,
    },
    success: function (response) {
      map.spin(false);
      let details = $.parseJSON(response);
      console.log(details);
      lat = details.latlng[0];
      lng = details.latlng[1];
      $("#country_name").html(country_name);
      $("#country_capital").html(details.capital);
      $("#country_population").html(details.population);
      $("#country_flag").attr("src", details.flag);
      $("#country_currency").html(details.currencies[0]["name"]);
      $("#country_wikipedia").attr(
        "href",
        "https://en.wikipedia.org/wiki/" + details.name
      );
    },
  });
}

function hide_popup() {
  $("#country_info").animate({
      left: "-999px",
    },
    1000
  );
  $(".pull_country_info_popup").animate({
      left: "0",
    },
    1000
  );
}

function show_popup() {
  $("#country_info").animate({
      left: "5px",
    },
    1000
  );
  $(".pull_country_info_popup").animate({
      left: "-40px",
    },
    1000
  );
}

function get_covid_data() {
  map.spin(true);
  $.ajax({
    url: "php/getCovidInfo.php",
    type: "GET",
    data: {
      country_code: country_code_global,
    },
    success: function (response) {
      let details = $.parseJSON(response);
      $("#covid_total_cases").html(details.cases);
      $("#covid_active").html(details.active);
      $("#covid_recovered").html(details.recovered);
      $("#covid_deaths").html(details.deaths);
      $("#covid_todayCases").html(details.todayCases);
      $("#covid_todayRecovered").html(details.todayRecovered);
      $("#covid_todayDeaths").html(details.todayDeaths);
      $("#covid_activePerOneMillion").html(details.activePerOneMillion);
      $("#covid_recoveredPerOneMillion").html(details.recoveredPerOneMillion);
      map.spin(false);
      $("#coronoModal").modal();
    },
  });
}

function get_weather_data() {
  map.spin(true);
  $.ajax({
    url: "php/getWeatherInfo.php",
    type: "GET",
    data: {
      lat: lat,
      lng: lng,
    },
    success: function (response) {
      let details = $.parseJSON(response);
      console.log(details);
      $("#first_row").html("");
      $("#second_row").html("");
      $("#third_row").html("");
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      for (let i = 0; i < 5; i++) {
        const d = details["daily"][i];
        const day = days[new Date(d["dt"] * 1000).getDay()];
        $("#first_row").append("<td>" + day + "</td>");
        $("#second_row").append("<td>" + parseInt(d["temp"]["max"]) + "°</td>");
        $("#third_row").append("<td>" + parseInt(d["temp"]["min"]) + "°</td>");
      }
      $("#weather_city_name").html(details.timezone);
      let daily = details["daily"][0]["weather"][0];
      $("#weather_description").html(
        daily["main"] +
        "<span>Wind " +
        parseInt(details["daily"][0]["wind_speed"]) +
        "km/h <span class='dot'>•</span> Precip " +
        details["daily"][0]["clouds"] +
        "%</span></h3>"
      );
      $("#weather_data img").attr(
        "src",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" +
        daily["icon"] +
        ".svg"
      );
      $("#weather_data .image_parent h1").html(
        parseInt(details["daily"][0]["temp"]["day"]) + "°"
      );
      map.spin(false);
      $("#weatherModal").modal();
    },
  });
}

function get_news_data() {
  $("#news_data").html("");
  map.spin(true);
  $.ajax({
    url: "php/getNewsInfo.php",
    data: {
      country_name: country_name,
    },
    method: "GET",
    success: function (response) {
      response = JSON.parse(response);
      console.log(response);
      const data = response["articles"];
      for (let i = 0; i < data.length; i++) {
        $("#news_data").append(get_news_card(data[i]));
      }
      map.spin(false);
      $("#newsModal").modal();
    },
  });
}

function get_news_card(data) {
  const card =
    '<div class="card" style="width: 20rem;"> <img class="card-img-top" src="' +
    data["urlToImage"] +
    '" alt="News Image"> <div class="card-body"> <h5 class="card-title">' +
    data["author"] +
    '</h5> <p class="card-text">' +
    data["title"] +
    '</p> <a href="' +
    data["url"] +
    '" target="_blank" class="btn btn-primary">Details</a> </div> </div>';
  return card;
}