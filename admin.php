<?php

include('connexion_bdd.php');

$sql = "SELECT `id`, `lastname`, `name`, `email`, `lang`, `voiture` FROM `formulaire` ORDER BY id DESC";

$users = $pdo->prepare($sql);

$users->execute();  ?>

<form method="post" action="export.php">
    <input type="submit" name="send" value="CSL">
</form>

<?php while($row = $users->fetch(PDO::FETCH_ASSOC)): ?>

    <p><?php echo  $row['id'] . " " . $row['lastname'] . " " . $row['name'] . " " . $row['lang'] . " " . $row['voiture'] . " ". $row['email'] . " ";?><p>


<?php endwhile;?>


