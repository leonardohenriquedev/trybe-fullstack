function ePalindromo(frase) {
    var aoContrario = frase.split('').reverse().join('');

    if (frase === aoContrario)
        console.log('true');
    else console.log('false');
}

ePalindromo('omo');


var array = [2, 3, 6, 7, 10, 1];

function retornaMaior(param) {
    var guardaIndice = '';
    for (let index = 0; index < array.length; index++) {
        if (array[index + 1] > array[index])
            guardaIndice = index + 1;
    }
    console.log(guardaIndice);
}

retornaMaior(array);


var arrayMenores = [2, 4, 6, 7, 10, 0, -3];

function retornaMenor(param) {
    var guardaIndice2 = '';
    for (let index = 0; index < arrayMenores.length; index++) {
        if (arrayMenores[index + 1] < arrayMenores[index])
            guardaIndice2 = index + 1;
    }
    console.log(guardaIndice2);
}

retornaMenor(arrayMenores);


var nomeMaior = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
    let maiorPalavra = nomeMaior[0];
    for (let indice in nomeMaior) {
        if (maiorPalavra.length < nomeMaior[indice].length) {
            maiorPalavra = nomeMaior[indice];
        }
    }
    return maiorPalavra;
}
console.log(maiorNome(nomeMaior));

var n = 5;

function somatoria(numero) {
    var total = 0;
    for (index = 0; index <= n; index++) {
        total += index;
    }
    return total;
}




console.log(somatoria(n));