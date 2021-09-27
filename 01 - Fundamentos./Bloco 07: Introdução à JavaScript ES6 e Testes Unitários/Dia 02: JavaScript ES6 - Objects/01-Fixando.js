let developer = { lastName: 'Machado' };

function add(obj, key, value) {
  return obj[key] = value;
}

add(developer, 'Nome', 'Leonardo');
add(developer, 'Telefone', '51 998599823');
console.log(developer);
