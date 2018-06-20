<?php

include('connexion_bdd.php');



$sql = "INSERT INTO `formulaire`(`lastname`, `name`, `email`, `lang`, `voiture`) VALUES (:lastname, :name, :email, :lang, :voiture)"; 

$stmt = $pdo->prepare($sql);


$stmt->bindValue(":lastname", $_POST['lastname']);

$stmt->bindValue(":name", $_POST['name']);

$stmt->bindValue(":email", $_POST['email']);

$stmt->bindValue(":lang", $_POST['lang']);

$stmt->bindValue(":voiture", $_POST['voiture']);

$stmt->execute();


header("Location: index.php"); 
?>