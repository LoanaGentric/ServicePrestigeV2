<?php 
try{
    $pdo = new PDO('mysql:dbname=servicePrestige;host=localhost','root','root');
} catch(PDOException $exception) {
    die($exception->getMessage());
}
$pdo->exec("SET NAMES UTF8"); 
?>