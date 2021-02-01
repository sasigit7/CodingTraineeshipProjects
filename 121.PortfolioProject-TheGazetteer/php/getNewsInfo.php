<?php
$country_name = urlencode($_GET['country_name']);
$data = file_get_contents('http://newsapi.org/v2/everything?q='.$country_name.'&sortBy=relevancy&apiKey=04174686125f4b648b2673010bae7e18');
print_r($data);