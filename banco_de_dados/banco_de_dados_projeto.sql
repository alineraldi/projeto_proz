-- CRIAÇÃO DAS TABELAS

-- Tabela Coordenação

CREATE TABLE coordenacao (
  id_coord SERIAL PRIMARY KEY,
  nome_area VARCHAR(25),
  cordenador VARCHAR(50),
  matricula_aluno INT NOT NULL,
  id_professor INT NOT NULL,
  id_aluno INT NOT NULL
);

ALTER TABLE coordenacao
ADD CONSTRAINT fk_id_professor FOREIGN KEY (id_professor) REFERENCES professor(id_professor)
add CONSTRAINT fk_aluno FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno);


-- Tabela Aluno

CREATE TABLE aluno (
  id_aluno SERIAL PRIMARY KEY,
  matricula INT NOT NULL,
  nome_aluno VARCHAR(50),
  telefone VARCHAR(15),
  instrumento VARCHAR(20),
  instrumento_codigo INT NOT NULL,
  professor INT NOT NULL,
  coordenacao INT NOT NULL,
  CONSTRAINT fk_coordenacao FOREIGN KEY (coordenacao) REFERENCES coordenacao(id_coord),
  CONSTRAINT fk_professor FOREIGN KEY (professor) REFERENCES professor(id_professor),
  CONSTRAINT fk_instrumento FOREIGN KEY (instrumento_codigo) REFERENCES instrumento(id_instrumento)
);

ALTER TABLE aluno
add CONSTRAINT fk_coordenacao FOREIGN KEY (coordenacao) REFERENCES coordenacao(id_coord),
ADD CONSTRAINT fk_professor FOREIGN KEY (professor) REFERENCES professor(id_professor),
ADD CONSTRAINT fk_instrumento FOREIGN KEY (instrumento_codigo) REFERENCES instrumento(id_instrumento);

-- Tabela Professor

CREATE TABLE professor (
  id_professor SERIAL PRIMARY KEY,
  nome_prof VARCHAR(50),
  especialidade VARCHAR(20),
  area VARCHAR(20),
  instrumento INT NOT NULL,
  aluno INT NOT NULL,
  coordenacao INT NOT NULL,
  CONSTRAINT fk_coordenacao FOREIGN KEY (coordenacao) REFERENCES coordenacao(id_coord),
  CONSTRAINT fk_aluno FOREIGN KEY (aluno) REFERENCES aluno(id_aluno),
  CONSTRAINT fk_instrumento FOREIGN KEY (instrumento) REFERENCES instrumento(id_instrumento)
);

ALTER TABLE professor
add CONSTRAINT fk_coordenacao FOREIGN KEY (coordenacao) REFERENCES coordenacao(id_coord),
ADD CONSTRAINT fk_aluno FOREIGN KEY (aluno) REFERENCES aluno(id_aluno),
ADD CONSTRAINT fk_instrumento FOREIGN KEY (instrumento) REFERENCES instrumento(id_instrumento);

-- Tabela Instrumento

CREATE TABLE instrumento (
  id_instrumento SERIAL PRIMARY KEY,
  nome VARCHAR(20),
  area VARCHAR(15),
  professor INT NOT NULL,
  aluno INT NOT NULL,
  CONSTRAINT fk_professor FOREIGN KEY (professor) REFERENCES professor(id_professor)
);

ALTER TABLE instrumento
ADD CONSTRAINT fk_professor FOREIGN KEY (professor) REFERENCES professor(id_professor);

-- Tabela Aula

CREATE TABLE aula (
    id_aluno INT NOT NULL,
    id_professor INT NOT NULL,
    professor VARCHAR(50),
    aluno VARCHAR(50),
    instrumento VARCHAR(20)
);

ALTER TABLE aula
ADD CONSTRAINT fk_id_aluno FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
ADD CONSTRAINT fk_id_professor FOREIGN KEY (id_professor) REFERENCES professor(id_professor);


-- POPULANDO AS TABELAS

INSERT INTO coordenacao (id_coord, nome_area, coordenador, matricula_aluno, id_professor, id_aluno)
VALUES
('1','Sopros','Jean-Pierre Rampal','1596','1','1'),
('2','Cordas','Jimi Hendrix','2756','2','2'),
('3','Percussão','Joey Jordison','5789','3','3'),
('4','Teclas','Ludwig van Beethoven','777','4','4');
('5','Sopros','Jean-Pierre Rampal','2054','9','8');
('6','Cordas','Jimi Hendrix','1545','16','5');
('7','Percussão','Joey Jordison','6985','11','6');
('8','Teclas','Ludwig van Beethoven','12','13','7');


INSERT INTO aluno (id_aluno, matricula, nome_aluno, telefone, instrumento, instrumento_codigo, professor, coordenacao)
VALUES
('1','1596','Samara Alves','3452-1523','Flauta','1','1','1'),
('2','2756','Aline Raldi','3785-4045','Violão','2','2','2'),
('3','5789','Débora Rodrigues','2563-8745','Bateria','3','3','3'),
('4','777','Diego Ramon','3457-2963','Piano','4','4','4'),
('5','1545','Arthur Gomes','','Berimbau','13','16','2'),
('6','6985','Sara Martins','9654-5632','Cajon','8','11','3'),
('7','0012','Leandro Silva','4521-8752','Clavicórdio','15','13','4'),
('8','2054','Ricardo Reis','9755-6588','Saxofone','6','9','1');


INSERT INTO professor (id_professor, nome_prof, especialidade, area, instrumento, aluno, coordenacao)
VALUES
('1','Jaes Galway','Flautista','Sopros','1','1','1'),
('2','Slash','Guitarrista','Cordas','2','2','2'),
('3','Dave Grohl','Baterista','Percussão','3','3','3'),
('4','Ray Charles','Pianista','Teclas','4','4','4');
('5','Luiz Gonzaga','Acordeonista','Teclas','14','4','4'),
('6','Samara Alves','Clarinetista','Sopros','5','4','1'),
('7','Thiaguinho','Panderista','Percussão','10','4','3'),
('8','Taylor Davis','Violonista','Cordas','11','4','2')
('9','Jaes Galway','Saxofonista','Sopros','6','1','1'),
('10','Slash','Violonista','Cordas','11','2','2'),
('11','Dave Grohl','Cajonero','Percussão','8','3','3'),
('12','Ray Charles','Cravista','Teclas','16','4','4')
('13','Luiz Gonzaga','Clavicórdio','Teclas','15','4','4'),
('14','Samara Alves','Trompetista','Sopros','7','4','1'),
('15','Thiaguinho','Chocalho','Percussão','9','4','3'),
('16','Taylor Davis','Berimbau','Cordas','13','4','2');


INSERT INTO instrumento (id_instrumento, nome, area, professor, aluno)
VALUES
('1','Flauta','Sopros','1','1'),
('2','Guitarra','Cordas','2','2'),
('3','Bateria','Percussão','3','3'),
('4','Piano','Teclas','4','4'),
('5','Clarinete','Sopros','6','4'),
('6','Saxofone','Sopros','9','4'),
('7','Trompete','Sopros','14','4'),
('8','Cajon','Percussão','11','4'),
('9','Chocalho','Percussão','15','4'),
('10','Pandeiro','Percussão','7','4'),
('11','Violino','Cordas','8','4'),
('12','Violão','Cordas','10','4'),
('13','Berimbau','Cordas','16','4'),
('14','Acordeon','Teclas','5','4'),
('15','Clavicórdio','Teclas','13','4'),
('16','Cravo','Teclas','12','4');


INSERT INTO aula (id_aluno, id_professor, professor, aluno, instrumento)
VALUES
('1','1','Jaes Galway','Samara Alves','Flauta'),
('2','2','Slash','Aline Raldi','Guitarra'),
('3','3','Dave Grohl','Débora Rodrigues','Bateria'),
('4','4','Ray Charles','Diego Ramon','Piano'),
('1','5','Luiz Gonzaga','Samara Alves','Acordeon'),
('3','6','Samara Alves','Débora Rodrigues','Clarinete'),
('2','7','Thiaguinho','Aline Raldi','Pandeiro'),
('4','8','Taylor Davis','Diego Ramon','Violino'),
('4','9','Jaes Galway','Diego Ramon','Saxofone'),
('3','10','Slash','Débora Rodrigues','Violão'),
('1','11','Dave Grohl','Samara Alves','Cajon'),
('2','12','Ray Charles','Aline Raldi','Cravo'),
('3','13','Luiz Gonzaga','Débora Rodrigues','Clavicórdio'),
('2','14','Samara Alves','Aline Raldi','Trompete'),
('4','15','Thiaguinho','Diego Ramon','Chocalho'),
('1','16','Taylor Davis','Samara Alves','Berimbau');
