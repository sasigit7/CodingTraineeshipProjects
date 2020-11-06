<?php
// These two set of lines initiate comprehensive error reporting, so that I can run the routine directly in the browser and see all output, including errors, echoed to the browser screen. To do this, enter the full path of the file as it appears on the web server, file name and extension and then a question mark followed by the parameters, each one separated by an ampersand. 
//"http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=london&maxRows=10&username=shashapi&style=full";
ini_set('display_errors', 'On');
error_reporting(E_ALL);

// API source url with predefined parameters 
$url = "http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=london&maxRows=10&username=shashapi&style=full";

// Initialize Curl 
$ch = curl_init();

// FALSE to stop cURL from verifying the peer's certificate.
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// TRUE to return the transfer as a string of the return value of curl_exec//() instead of outputting it directly.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// The URL to fetch. This can also be set when initializing a session with curl_init().
curl_setopt($ch, CURLOPT_URL, $url);

//Execute the cURL object and stores the result to $result.
$result = curl_exec($ch);
//print_r($result);

// Finish the session.
curl_close($ch);

// Convert JSON string into an object. 
$decode = json_decode($result, true);
echo json_encode($decode);