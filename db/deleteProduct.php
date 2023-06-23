<?php
$idFromGet = $_GET['id'];

    $dbc = mysqli_connect('localhost', 'root', '', 'grocery_store');
    $query = "DELETE FROM products WHERE products.id=$idFromGet";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>
