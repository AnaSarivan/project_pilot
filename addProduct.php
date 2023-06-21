
<?php
$name = $_POST['name'];
$price = $_POST['price'];

echo "string";
    $dbc = mysqli_connect('localhost', 'root', '', 'grocery_store');
    $query = "INSERT INTO products (name, price) VALUES('$name', '$price')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>