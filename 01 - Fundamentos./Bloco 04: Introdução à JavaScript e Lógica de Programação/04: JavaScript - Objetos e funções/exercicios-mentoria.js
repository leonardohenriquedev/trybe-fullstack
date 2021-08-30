// / exercício 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// // Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// // n = 7
// //    *
// //   * *
// //  *   *
// // *******

// 1 declarar variavel n
var n = 7;

// 2 declarar variavel asterisco
var asterisco = '*';

// 3 declarar a variavel espaço em branco
var espaco = '';

// 4 define a logica
var x = (n + 1) / 2;

// 5 criar o laço de repetição
for (let index = 0; index < x; index++) {
    for (let b = 0; b < x - index - 1; b++) {
        espaco += '/';
    }
    if (index !== 0) {
        asterisco += ' *';
    }
    console.log(espaco + asterisco);
    espaco = '';
}