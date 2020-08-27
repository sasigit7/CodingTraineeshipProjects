<html>

<body>
    <!--Your code goes here-->
    <?php print_r($_GET) ?>
    <br>
    <br>
    <?= "The division of ${_GET["div_num"]} and ${_GET["div_den"]} is:" ?>
    <h3><?= $_GET["div_num"] / $_GET["div_den"] ?></h3>
    <br>
    <a href="index.php">Reset</a>
</body>

</html>