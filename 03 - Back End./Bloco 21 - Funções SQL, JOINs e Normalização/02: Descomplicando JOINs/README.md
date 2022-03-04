## Exercicios do dia 21.2

SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id;
<hr>
SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.international_sales > b.domestic_sales;
<hr>
SELECT
    m.title, b.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
ORDER BY rating DESC;
<hr>
SELECT
    t.id, t.name, t.location, m.title
FROM
    Pixar.Theater AS t
        LEFT JOIN
    Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY t.name ASC;
<hr>
SELECT
    m.*, t.name
FROM
    Pixar.Theater AS t
        RIGHT JOIN
    Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY t.name ASC;
<hr>
SELECT
    m.*
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.rating > 8;