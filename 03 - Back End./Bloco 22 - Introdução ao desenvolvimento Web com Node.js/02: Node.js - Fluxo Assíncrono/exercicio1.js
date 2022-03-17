function Calcula(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 != 'number' ||
      typeof num2 != 'number' ||
      typeof num3 != 'number'
    ) {
      reject(new Error('Informe apenas números'));
    }

    const resultado = (num1 + num2) * num3;

    if (resultado < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(resultado);
  });

  return promise;
}

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);

Calcula(n1, n2, n3)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((erro) => console.log(`Erro: ${erro.message}`));
