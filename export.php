<?php
include ('connexion_bdd.php');

$select = $pdo->prepare('
SELECT *
FROM formulaire
');

$select->setFetchMode(PDO::FETCH_ASSOC);
$select->execute();

$newReservations = $select->fetchAll();

$excel = "";
$excel .=  "Id\tNom\tPrénom\tMail\tVoiture\tTéléphone\n";

foreach($newReservations as $row) {
    $excel .= "$row[id]\t$row[lastname]\t$row[firstname]\t$row[lang]\t$row[car]\t$row[mail]\n";
}

header("Content-type: application/vnd.ms-excel");
header("Content-disposition: attachment; filename=liste-clients.xls");

print $excel;
exit;

?>
