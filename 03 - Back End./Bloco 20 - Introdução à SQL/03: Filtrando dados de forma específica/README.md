## Exercicios de Fixação 20.3

/* 1. Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org . As informações podem ser encontradas na tabela customer*/

    SELECT  * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';


/* 2. Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
*/

    SELECT * FROM sakila.customer
    WHERE active IS FALSE
    AND store_id = 2
    AND first_name <> 'KENNETH'
    ORDER BY first_name;

/*3. 1.  O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (  _replacement_cost_ ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em  ordem alfabética  pelo título. As informações podem ser encontradas na tabela  film*/

    SELECT title, description, release_year, replacement_cost FROM sakila.film
    WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
    AND replacement_cost > 18
    ORDER BY replacement_cost DESC, title
    LIMIT 100;

/* 4. Quantos clientes estão ativos e na loja 1 ? As informações podem ser encontradas na tabela customer*/

    SELECT COUNT(*) FROM sakila.customer
    WHERE active IS TRUE
    AND store_id = 1;

/*5. Mostre todos os detalhes dos clientes que não estão ativos na loja 1 . As informações podem ser encontradas na tabela customer*/

     SELECT * FROM sakila.customer
    WHERE active IS FALSE
    AND store_id = 1;

/* 6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film*/

    SELECT * FROM sakila.film
    WHERE rating = 'NC-17'
    ORDER BY rental_rate ASC, title
    LIMIT 50;

-- Encontra qualquer resultado finalizando com "don"

    SELECT * FROM sakila.film
    WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"

    SELECT * FROM sakila.film
    WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"

    SELECT * FROM sakila.film
    WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"

    SELECT * FROM sakila.film
    WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"

    SELECT * FROM sakila.film
    WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres

    SELECT * FROM sakila.film
    WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E

    SELECT * FROM sakila.film
    WHERE title LIKE 'E__%';

## Outras Infos

    SELECT * FROM banco_de_dados
    WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);
    
    -- ou também
    SELECT * FROM banco_de_dados
    WHERE coluna IN (expressão);
    
    -- Note que o MySQL inclui o valor inicial e o final nos resultados
    SELECT title, length FROM sakila.film
    WHERE length BETWEEN 50 AND 120;
    
    SELECT * FROM sakila.language
    WHERE name BETWEEN 'Italian' AND 'Mandarin'
    ORDER BY name;
    
    SELECT rental_id, rental_date FROM sakila.rental
    WHERE rental_date
    BETWEEN '2005-05-27' AND '2005-07-17';

## Exercícios do dia 20.3

-- Escreva uma query para exibir todas as peças que começam com GR .

    SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE "gr%";

-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.

    SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;

-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .

    SELECT 
        peca, Preco, Fornecedor
    FROM
        PecasFornecedores.Fornecimentos
    WHERE
        Fornecedor LIKE '%n%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.

    SELECT 
        *
    FROM
        PecasFornecedores.Fornecedores
    WHERE
        name LIKE '%ltda'
    ORDER BY name DESC;

-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

    SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE name LIKE '%f%'

-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.

    SELECT 
        *
    FROM
        PecasFornecedores.Fornecimentos
    WHERE
        Preco BETWEEN 15 AND 40
    ORDER BY Preco;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .

    SELECT COUNT(*) FROM PecasFornecedores.Vendas WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';
