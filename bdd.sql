-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mer. 20 juin 2018 à 11:54
-- Version du serveur :  5.6.38
-- Version de PHP :  7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `servicePrestige`
--

-- --------------------------------------------------------

--
-- Structure de la table `connexion_membre`
--

CREATE TABLE `connexion_membre` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(30) NOT NULL,
  `password` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `connexion_membre`
--

INSERT INTO `connexion_membre` (`id`, `pseudo`, `password`) VALUES
(1, 'patron123', 'patron');

-- --------------------------------------------------------

--
-- Structure de la table `formulaire`
--

CREATE TABLE `formulaire` (
  `id` int(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lang` varchar(255) NOT NULL,
  `voiture` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `formulaire`
--

INSERT INTO `formulaire` (`id`, `lastname`, `name`, `email`, `lang`, `voiture`, `phone`) VALUES
(1, '', '', '', '', '', 0),
(2, 'yes', 'p', 'eee', '', '', 0),
(3, 'yes', 'p', 'eee', '', '', 0),
(4, 'lea', 'leal', 'leacharrier18@gmail.com', '', '', 0),
(5, 'lea', 'leal', 'leacharrier18@gmail.com', '', '', 0),
(6, 'lea', 'leal', 'lealeae@gmai.com', '', '', 0),
(7, 'gvhbjn', 'vghbjkn', 'cgvhbn@gmail.com', '', '', 0),
(8, 'tvhbjn', 'vibhjkn', 'jnb@ugbjn.vil', 'ivbh', 'jnvibh', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `connexion_membre`
--
ALTER TABLE `connexion_membre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formulaire`
--
ALTER TABLE `formulaire`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `connexion_membre`
--
ALTER TABLE `connexion_membre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `formulaire`
--
ALTER TABLE `formulaire`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
