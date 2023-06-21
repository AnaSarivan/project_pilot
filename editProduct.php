<?php
$name = $_POST['name'];
$id = $_POST['id'];

    $dbc = mysqli_connect('localhost', 'root', '', 'grocery_store');
    $query = "UPDATE products SET name='$name' WHERE products.id=$id";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>



