USE juego;

-- Inserting dummy data into Jugador table
INSERT INTO Jugador (usuario, contrasena) VALUES 
('player1', 'password1'),
('player2', 'password2'),
('player3', 'password3'),
('player4', 'password4'),
('player5', 'password5');

-- Inserting dummy data into Carta table
INSERT INTO Carta (nombre, descripcion, tipo, vida, energia, debilidad, evolucion) VALUES 
('Carta1', 'Descripción de Carta1', 'Tipo1', 100, 50, 'Debilidad1', 'Evolucion1'),
('Carta2', 'Descripción de Carta2', 'Tipo2', 150, 60, 'Debilidad2', 'Evolucion2'),
('Carta3', 'Descripción de Carta3', 'Tipo3', 120, 70, 'Debilidad3', 'Evolucion3'),
('Carta4', 'Descripción de Carta4', 'Tipo4', 200, 80, 'Debilidad4', 'Evolucion4'),
('Carta5', 'Descripción de Carta5', 'Tipo5', 180, 90, 'Debilidad5', 'Evolucion5');

-- Inserting dummy data into Habilidad table
INSERT INTO Habilidad (nombre, tipo, carta, DMG) VALUES 
('Habilidad1', 'TipoHabilidad1', 1, 20),
('Habilidad2', 'TipoHabilidad2', 2, 30),
('Habilidad3', 'TipoHabilidad3', 3, 25),
('Habilidad4', 'TipoHabilidad4', 4, 35),
('Habilidad5', 'TipoHabilidad5', 5, 40);

-- Inserting dummy data into Mazo table
INSERT INTO Mazo (nombre, descripcion, numero_de_cartas) VALUES 
('Mazo1', 'Descripción de Mazo1', 30),
('Mazo2', 'Descripción de Mazo2', 25),
('Mazo3', 'Descripción de Mazo3', 35),
('Mazo4', 'Descripción de Mazo4', 40),
('Mazo5', 'Descripción de Mazo5', 20);

-- Inserting dummy data into Inventario table
INSERT INTO Inventario (carta, mazo, jugador) VALUES 
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3);


INSERT INTO Partida (fecha, ganador, perdedor) VALUES 
('2024-03-14 12:00:00', 1, 2),
('2024-03-15 14:00:00', 3, 4),
('2024-03-16 16:00:00', 5, 1),
('2024-03-17 18:00:00', 2, 3),
('2024-03-18 20:00:00', 4, 5);


INSERT INTO Turn (numero, jugador, partida, fecha) VALUES 
(1, 1, 1, '2024-03-14 12:15:00'),
(2, 2, 1, '2024-03-14 12:30:00'),
(3, 3, 2, '2024-03-15 14:15:00'),
(4, 4, 2, '2024-03-15 14:30:00'),
(5, 5, 3, '2024-03-16 16:15:00');