<?php
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$data = file_get_contents("https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=$lat&lon=$lng&exclude=current,minutely,hourly,alerts&APPID=4264d96a45968735df7a8073aa680813");
print_r($data);