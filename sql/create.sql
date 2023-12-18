CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(200),
    idade INT
);



--=------------------------------------------------------------------------------------------
-- detelando itens
DELETE FROM usuarios WHERE nome = "leo"

-----------------------------------------------------------------------------------------------
-- Atualizando itens table 
UPDATE usuarios SET nome = "Testando Nomes..." WHERE nome = "Leo"