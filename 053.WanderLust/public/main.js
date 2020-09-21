// Foursquare API Info
const clientId = '2ZHLZORW2K0MF03TB5ZY3G0ATVKWVNO30YYQ1LYP5AMOPJU1';
const clientSecret = 'JFH1PWCUMNBTHE0CFFI4MTKGDFDNEV4UWWYXXEIFJVGIEG31';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'c2d0f0a683df8b7ec39cbc706b858867';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
// getVenues function
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            // console.log(response);
            const jsonResponse = await response.json();
            //console.log(jsonResponse);
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            //console.log(venues);
            return venues;
        }

    } catch (error) {
        console.log(error);
    }
}

// getForecast function
const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            // console.log(response);
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        //console.log(venueIcon);
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues => renderVenues(venues));
    getForecast().then(forecast => renderForecast(forecast));
    return false;
}

$submit.click(executeSearch)