let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+=1) {
    // console.log(numbers[index]);    
}

var somados = 0;
for (let index = 0; index < numbers.length; index+=1) {
   var somados = somados + numbers[index]; 
}
// console.log(somados);

var media = 0;
for (let index = 0; index < numbers.length; index+=1) {
    media+=1;
}
// console.log(somados/media);

if(somados/media>20){
    // console.log('valor maior que 20');
}
// else console.log('valor menor ou igual a 20');

var maiorValor = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index]>maiorValor){
        maiorValor = numbers[index];
    }
}
// console.log(maiorValor);

var impares = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index]%2!==0) {
        impares+=1;
    }
}

if (impares>0) {
    // console.log(impares);
}
// else console.log('nenhum valor ímpar encontrado');

var menorValor = maiorValor;
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index]<menorValor){
        menorValor = numbers[index];
    }
}

// console.log(menorValor);

var array = [];
for(var index = 1; index<26; index+=1){
    array.push(index);
}

// console.log(array);

for(var index = 0; index<array.length; index+=1){
    console.log(array[index]/2);
}