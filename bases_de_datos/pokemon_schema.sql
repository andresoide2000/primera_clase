SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS juego;
CREATE SCHEMA juego;
USE juego;

CREATE TABLE Jugador(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100),
    contrasena VARCHAR(255)
);

CREATE TABLE Carta(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(500),
    tipo VARCHAR(200),
    vida INT UNSIGNED,
    energia INT UNSIGNED,
    debilidad VARCHAR(200),
    evolucion VARCHAR(200)
);

CREATE TABLE Habilidad(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    tipo VARCHAR(200),
    carta INT,
    DMG INT UNSIGNED,
    FOREIGN KEY (carta) REFERENCES Carta(id)
);

CREATE TABLE Mazo(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    descripcion VARCHAR(300),
    numero_de_cartas INT UNSIGNED,
    CONSTRAINT ck_numero_de_cartas CHECK (numero_de_cartas >= 1)
);

CREATE TABLE Inventario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    carta INT,
    mazo INT,
    jugador INT,
    FOREIGN KEY (carta) REFERENCES Carta(id),
    FOREIGN KEY (mazo) REFERENCES Mazo(id),
    FOREIGN KEY (jugador) REFERENCES Jugador(id)
);

CREATE TABLE Partida(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME,
    ganador INT,
    perdedor INT,
    FOREIGN KEY (ganador) REFERENCES Jugador(id),
    FOREIGN KEY (perdedor) REFERENCES Jugador(id)
);

CREATE TABLE Turn(
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT UNSIGNED,
    jugador INT,
    partida INT,
    fecha DATETIME,
    FOREIGN KEY (jugador) REFERENCES Jugador(id),
    FOREIGN KEY (partida) REFERENCES Partida(id),
    CONSTRAINT ck_numero CHECK (numero >= 1)
);
