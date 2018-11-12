-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  lun. 12 nov. 2018 à 21:32
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `whatToDo`
--

-- --------------------------------------------------------

--
-- Structure de la table `History`
--

CREATE TABLE `History` (
  `Id` int(11) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `IdUser` int(11) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `TypeMovie`
--

CREATE TABLE `TypeMovie` (
  `Id` int(11) NOT NULL,
  `IdUser` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `TypeSerie`
--

CREATE TABLE `TypeSerie` (
  `Id` int(11) NOT NULL,
  `IdUser` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `Id` int(11) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `Login` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `SteamLogin` varchar(255) DEFAULT NULL,
  `SteamPassword` varchar(255) DEFAULT NULL,
  `TwitchLogin` varchar(255) DEFAULT NULL,
  `TwitchPassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `History`
--
ALTER TABLE `History`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_history_user_idx` (`IdUser`);

--
-- Index pour la table `TypeMovie`
--
ALTER TABLE `TypeMovie`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_typemovie_user_idx` (`IdUser`);

--
-- Index pour la table `TypeSerie`
--
ALTER TABLE `TypeSerie`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_typeserie_user_idx` (`IdUser`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `History`
--
ALTER TABLE `History`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `TypeMovie`
--
ALTER TABLE `TypeMovie`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `TypeSerie`
--
ALTER TABLE `TypeSerie`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `History`
--
ALTER TABLE `History`
  ADD CONSTRAINT `pk_history_user` FOREIGN KEY (`IdUser`) REFERENCES `User` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `TypeMovie`
--
ALTER TABLE `TypeMovie`
  ADD CONSTRAINT `pk_typemovie_user` FOREIGN KEY (`IdUser`) REFERENCES `User` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `TypeSerie`
--
ALTER TABLE `TypeSerie`
  ADD CONSTRAINT `pk_typeserie_user` FOREIGN KEY (`IdUser`) REFERENCES `User` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
