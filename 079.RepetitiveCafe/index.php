<h1>Welcome to the Repetitive Cafe</h1>
<h3>Drinks!</h3>
<?php
$drinks = [
    "Coffee" => 4.00,
    "Tea" => 2.50,
    "Hot Chocolate" => 3.00,
    "Cappucino" => 5.00
];
?>

<ul>
    <?php foreach ($drinks as $drink => $price) : ?>
        <li><?= "$drink: $price" ?></li>
    <?php endforeach; ?>
</ul>

<h3>Pastries! ($2 each)</h3>
<?php
$pastries = [
    "Croissant",
    "Muffin",
    "Slice of Pie",
    "Slice of Cake",
    "Cupcake",
    "Brownie"
];
?>
<ul>
    <?php for ($i = 0; $i < count($pastries); $i++) : ?>
        <li><?= $pastries[$i] ?></li>
    <?php endfor; ?>
</ul>

<ul>

</ul>