<?php
$idGet = $_GET['id'];
$nameGet = $_GET['name'];

    $dbc = mysqli_connect('localhost', 'root', '', 'grocery_store');
    $query = "SELECT name FROM products WHERE products.id=$idGet AND products.name=$nameGet ORDER BY name ASC";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>

