<html>

<body>
    <!--Your code goes here-->
    <?php print_r($_GET) ?>
    <br>
    <br>
    <?= "The sum of ${_GET["add_first"]} and ${_GET["add_second"]} is:" ?>
    <h3><?= $_GET["add_first"] + $_GET["add_second"] ?></h3>
    <br>
    <a href="index.php">Reset</a>
</body>

</html>