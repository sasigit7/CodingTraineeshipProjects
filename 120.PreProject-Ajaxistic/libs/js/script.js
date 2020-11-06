// Preloader Script
let timeLapse;
const preLoader = () => {
  timeLapse = setTimeout(showPage, 3000);
}
const showPage = () => {
  document
    .getElementById('preloader')
    .style
    .display = 'none';
  document
    .getElementById('apiTable')
    .style
    .display = 'block';
}

// Wikipedia Script:
$('#wikiBtn')
  .click(function () {
    // alert("test");
    $.ajax({
      url: 'libs/php/wikipediaAPI.php',
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        // .html('') method is used to clear the existing content
        $('#results').html('');
        // console.log(result) // Received Json array in the console. Used for each
        // nested loop
        $.each(result, function (i, item) {
          // { geonames: Array(10)} console.log(item); // {Array(10)}
          $
            .each(item, function (index, val) {
              // console.log(val.summary); console.log(val.countryCode);
              $('#results').append('Title: ' + val.title + '<br/>')
              $('#results').append('Summary: ' + val.summary + '<br/>')
              $('#results').append('Country Code: ' + val.countryCode + '<br/>')
              $('#results').append('Wikipedia URL: ' + val.wikipediaUrl + '<br/>')
            })
        })
      }
    })
  })

// Weather Script:
$('#weatherBtn').click(function () {
  // alert("test");
  $.ajax({
    url: 'libs/php/weatherAPI.php',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      $('#results').html('')
      // console.log(result);
      $.each(result, function (i, item) {
        // console.log(item);
        $
          .each(item, function (index, val) {
            // console.log(val.lng); console.log(val.observation);
            $('#results').append('Language: ' + val.lng + '<br/>')
            $('#results').append('Observation: ' + val.observation + '<br/>')
          })
      })
    }
  })
});

// Country Info Script:
$('#countryBtn').click(function () {
  // alert("test");
  $.ajax({
    url: 'libs/php/countryInfoAPI.php',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      $('#results').html('')
      // console.log(result);
      $.each(result, function (i, item) {
        // console.log(item);
        $
          .each(item, function (index, val) {
            // console.log(val.lng); console.log(val.observation);
            $('#results').append('Continent: ' + val.continent + '<br/>')
            $('#results').append('Capital: ' + val.capital + '<br/>')
            $('#results').append('Languages: ' + val.languages + '<br/>')
            $('#results').append('Country Name: ' + val.countryName + '<br/>')
            $('#results').append('Currency Code: ' + val.currencyCode + '<br/>')
          })
      })
    }
  })
});
