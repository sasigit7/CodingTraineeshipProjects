<?php
$country_code = $_GET['country_code'];
$data = file_get_contents("https://corona.lmao.ninja/v2/countries/$country_code?yesterday&strict&query");
print_r($data);