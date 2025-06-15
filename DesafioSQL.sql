--- Escreva a consulta SQL para listar o nome de todos os alunos matriculados na  disciplina de Cálculo do professor João.
SELECT a.nome_aluno
FROM Alunos a 
INNER JOIN Matriculas m  ON a.aluno_id = m.aluno_id
INNER JOIN Turmas tu ON m.turma_id = tu.turma_id
INNER JOIN Disciplinas d ON tu.disciplina_id = d.disciplina_id
INNER JOIN Professores p ON tu.professor_id = p.professor_id
WHERE d.nome_disciplina = 'Cálculo' AND p.nome_professor = 'João';


---- Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas.

SELECT d.nome_disciplina,  COUNT(m.aluno_id) AS quanridade_de_alunos
FROM Disciplinas d 
INNER JOIN Turmas tu  ON d.disciplina_id = tu.disciplina_id 
INNER JOIN Matriculas m ON m.turma_id = m.turma_id 
GROUP BY d.nome_disciplina;

--- Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam.

SELECT d.nome_disciplina
FROM Disciplinas d 
WHERE NOT EXISTS(
	SELECT 1 FROM Professores p
	WHERE NOT EXISTS (
		SELECT 1 FROM Turmas tu
		WHERE tu.professor_id = p.professor_id AND tu.disciplina_id = d.disciplina_id 
	)
);


--- Escreva a consulta SQL que exibe o total de professores.

SELECT COUNT(professor_id) AS total_de_professores
FROM Professores;

--- Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020.

SELECT a.nome_aluno 
FROM Alunos a 
INNER JOIN Matriculas m ON a.aluno_id = m.aluno_id 
INNER JOIN Turmas tu ON m.turma_id = tu.turma_id
WHERE tu.ano BETWEEN 2000 AND 2020;
