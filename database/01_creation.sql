-- ===================================================
-- Projet      : Trouve ton artisan
-- Fichier     : 01_creation.sql
-- Auteur      : Alassane Ndour (Alou-boy)
-- Description : Creation de la base, de l'utilisateur
--               et des 3 tables
-- ===================================================

-- 1) Base propre
DROP DATABASE IF EXISTS trouve_ton_artisan;

-- 2) Creation de la base
CREATE DATABASE trouve_ton_artisan
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;

USE trouve_ton_artisan;

-- 3) Utilisateur dedie (securite)
DROP USER IF EXISTS 'tta_user'@'localhost';
CREATE USER 'tta_user'@'localhost' IDENTIFIED BY 'Artisan2025';
GRANT ALL PRIVILEGES ON trouve_ton_artisan.* TO 'tta_user'@'localhost';
FLUSH PRIVILEGES;

-- ===================================================
-- TABLES
-- ===================================================

-- Table : categorie (Batiment, Services, Fabrication, Alimentation)
CREATE TABLE categorie (
    id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE
);

-- Table : specialite (rattachee a UNE categorie)
CREATE TABLE specialite (
    id_specialite INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
);

-- Table : artisan (rattache a UNE specialite)
CREATE TABLE artisan (
    id_artisan INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    a_propos TEXT,
    email VARCHAR(150) NOT NULL UNIQUE,
    site_web VARCHAR(255),
    top BOOLEAN NOT NULL DEFAULT FALSE,
    id_specialite INT NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite)
);