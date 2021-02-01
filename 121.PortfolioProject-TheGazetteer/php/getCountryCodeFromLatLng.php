<?php

$lat = $_GET['lat'];
$lng = $_GET['lng'];
$username = $_GET['username'];
// The file_get_contents() reads a file into a string.
$data = file_get_contents("http://api.geonames.org/countryCodeJSON?lat=$lat&lng=$lng&username=$username");
print_r($data);