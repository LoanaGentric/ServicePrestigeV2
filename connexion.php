<link rel="stylesheet" type="text/css" href="css/connexion.css" />
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">


<?php include('connexion_bdd.php'); ?>

<div class="connexion">
    <img src="images/logo.png" class="logo">

    <form method="post" action="connexion.php">
        <div class="contain-input">    
            <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        </div>

        <div class="contain-input">    
            <input type="password" name="password" id="password" placeholder="Password" />
        </div>

        <input type="submit" name="send" value="Se connecter" class="btn">
    </form>    
</div>


<?php

$_SESSION["login"]=$_POST["pseudo"];
$_SESSION["pass"]=$_POST["password"];


if (empty($_SESSION["login"]) or empty($_SESSION['pass'])) {
    echo "<div class='message-connexion'>Veuillez saisir un pseudo et un mot de passe</div>";
}

else {
    $st = $pdo->query("SELECT COUNT(*) FROM connexion_membre WHERE pseudo='".$_SESSION["login"]."' AND password='".$_SESSION["pass"]."'")->fetch();
    if ($st['COUNT(*)'] == 1)
        header("Location: admin.php");

    echo "<div class='error-connexion'>Veuillez ressaisir votre pseudo ou mdp";

}

?>
