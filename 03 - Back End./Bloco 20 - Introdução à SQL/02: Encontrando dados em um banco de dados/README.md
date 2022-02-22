## Exercícios do dia 02: Encontrando dados em um banco de dados.

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".<br>
   `SELECT 'This is SQL Exercise, Practice and Solution' AS Title;`
2. Escreva uma query para exibir três números em três colunas.<br>
   `SELECT '1' AS First, '2' AS Second, '3' AS Third;`

3. Escreva uma query para exibir a soma dos números 10 e 15.<br>
   `SELECT 10 + 15 AS Sum;`

4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.<br>
   `SELECT 2*5 AS Expression;`

5. Escreva uma query para exibir todas as informações de todos os cientistas.<br>
   `SELECT * FROM Scientists.Scientists;`

6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.<br>
   `SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;`

7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.<br>
   `SELECT Name FROM Scientists.Scientists ORDER BY Name;`

8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.<br>
   `SELECT Name FROM Scientists.Projects ORDER BY Name DESC;`

9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.<br>
   `SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') AS 'Title' FROM Scientists.Projects;`

10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.<br>
    `SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;`

11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.<br>
    `SELECT DISTINCT Project FROM Scientists.AssignedTo;`

12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.<br>
    `SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;`

13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.<br>
    `SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;`

14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.<br>
    `SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;`

15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.<br>
    `SELECT CONCAT('Existem ', COUNT(*), ' Cientistas na tabela Scientists') AS Title FROM Scientists.Scientists;`
