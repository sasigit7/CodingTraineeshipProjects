<?php

$east = $_GET['east'];
$west = $_GET['west'];
$north = $_GET['north'];
$south = $_GET['south'];
$username = $_GET['username'];
// The file_get_contents() reads a file into a string.
$data = file_get_contents("http://api.geonames.org/citiesJSON?north=$north&south=$south&east=$east&west=$west&username=$username");
print_r($data);