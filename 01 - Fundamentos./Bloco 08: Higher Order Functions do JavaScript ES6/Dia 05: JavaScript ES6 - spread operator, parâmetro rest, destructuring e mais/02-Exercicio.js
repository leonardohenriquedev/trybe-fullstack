// escreva sum abaixo

const sum = ((...numbers) => numbers.reduce((acc, crr) => acc += crr, 0));

console.log(sum(1, 2, 7));
