<?php

$string = file_get_contents("../data/countryBorders.geo.json");
$json = json_decode($string);
$features = $json->features;

$country_code = $_GET['country_code'];

$output_geom = "";
for($i=0;$i<sizeof($features);$i++){
    $feature = $features[$i];
    if($feature->properties->iso_a2 == $country_code){
        $output_geom = $feature->geometry;
    }
}
print_r(json_encode($output_geom));