<?php
/*
Create variables to hold the amount of each foreign currency we’ll be exchanging:

We had a blissful time at Lake Yeak Laom in Ratanakiri, Cambodia and ended up with 2103942 riel left in our pocket
We saw the best sunset of our lives in Hpa-an, Myanmar and left the country with 19092 kyat
We got our fill of fjords in Bergen, Norway and discovered 109 krones that went unspent
We soaked up the sun and history in Saranda, Albania and found 9094 lek scattered throughout our luggage when we arrived home to NYC
It makes sense to name the variables meaningfully. For example, we would create a variable $riel to hold the value 2103942.
*/
  $riel = 2103942;
  $kyat = 19092;
  $krones = 109;
  $lek = 9094;

//Use echo to print how much of each currency we started out with.
echo "We started out our trip with the following currencies: $riel riel, $kyat kyat, $krones krones, $lek lek.";

//Look up the exchange rate for each of those currencies. Save a variable for each exchange rate.
$riel_to_usd = 0.00026;
$kyat_to_usd = 0.00066;
$krones_to_usd = 0.11;
$lek_to_usd = 0.0090;

echo "\n"; 

//For each currency, calculate the amount of USD it will be exchanged for and use echo to print this to the terminal.
$usd_from_riel = $riel * $riel_to_usd;
echo "\nYour $riel riel were exchanged for $usd_from_riel usd.";

$usd_from_kyat = $kyat * $kyat_to_usd;
echo "\nYour $kyat riel were exchanged for $usd_from_kyat usd.";

$usd_from_krones = $krones * $krones_to_usd;
echo "\nYour $krones riel were exchanged for $usd_from_krones usd.";

$usd_from_lek = $lek * $lek_to_usd;
echo "\nYour $lek riel were exchanged for $usd_from_lek usd.";

echo "\n";

// The currency exchange business takes a flat $1 fee per conversion. Calculate our final amount of USD and use echo to print it to the terminal.
$final_amount = $usd_from_riel + $usd_from_kyat + $usd_from_krones + $usd_from_lek - 4;
echo "\nAfter deducting the transactions fees, you'll be receiving $final_amount usd.";





























