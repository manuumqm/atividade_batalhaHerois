CREATE DATABASE superherois;

\c superherois;

CREATE TABLE herois (
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(200) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    nivel INTEGER NOT NULL,
    hp INTEGER NOT NULL
);


CREATE TABLE batalhas (
    id SERIAL PRIMARY KEY NOT NULL,
    heroi1_id INTEGER NOT NULL,
    heroi2_id INTEGER NOT NULL,
    vencedor_id INTEGER NOT NULL,
    FOREIGN KEY (heroi1_id) REFERENCES herois(id),
    FOREIGN KEY (heroi2_id) REFERENCES herois(id)
);


INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Superman', 'Super-Força', 16, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Supergirl', 'Super-Força', 15, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Mulher-Maravilha', 'Resistencia', 12, 50);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Flash', 'Velocidade', 8, 40);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Batman', 'Inteligencia', 7, 30);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Lanterna Verde', 'Anéis de Poder', 13, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Shazam', 'Poderes Mitologicos', 13, 90);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Darkseid', 'imortalidade', 15, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Metrópolis', 'Controlar Planta', 6, 40);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Doutor Destino', 'Feiticeiro', 9, 90);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Thanos', 'Manipular a Realidade', 18, 90);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Thor', 'Deus do Trovão', 19, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Hulk', 'Super-Força', 11, 60);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Doutor Estranho', 'Mago', 17, 80);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Jean Grey', 'Telecinese', 19, 98);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Capitã Marvel', 'Manipular Energia', 20, 99);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Feiticeira Escarlate', 'Feiticeira', 20, 100);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Professor Xavier', 'Telepatia', 18, 78);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Wolverine', 'garras retráteis', 16, 89);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Homem de Ferro ', 'Armadura Tecnologicamente Avançada', 15, 68);
INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Homem-Aranha', 'Teia de Aranha', 15, 80);