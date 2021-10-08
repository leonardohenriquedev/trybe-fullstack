const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const array = arrays.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue)
  }, []);

  return array;
}
// console.log(flatten());
