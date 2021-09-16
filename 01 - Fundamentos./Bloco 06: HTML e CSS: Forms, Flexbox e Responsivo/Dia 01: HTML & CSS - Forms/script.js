window.onload = function() {

  const submitButton = document.querySelector('#submit');
  const statesList = document.querySelector('#estados');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const cpf = document.querySelector('#cpf');
  const endereco = document.querySelector('#endereco');
  const cidade = document.querySelector('#cidade');
  const estado = document.querySelector('#estado');
  const casa = document.querySelector('#casa');
  const apto = document.querySelector('#apto');
  const textarea = document.querySelector('#textarea');
  const cargo = document.querySelector('#cargo');
  const descricaoCargo = document.querySelector('#descricao-cargo');
  const dateInicio = document.querySelector('#date-inicio');
  const curriculoCriado = document.querySelector('#curriculoCriado');
  const clearButton = document.querySelector('#clear')
  let input = document.querySelectorAll('input');

  const states = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraíma' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  for (let index = 0; index < states.length; index++) {
    let stateCreated = document.createElement('option');
    stateCreated.value = states[index].value;
    stateCreated.innerText = states[index].label;
    statesList.appendChild(stateCreated);
  }

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let divCreated = document.createElement('div');

    for (let index = 0; index < curriculoCriado.children.length; index = 0) {
      curriculoCriado.children[index].remove();
    }

    if (name.value.length <= 40 && name.value.length > 0) {
      let info = document.createElement('p');
      info.innerText = 'Nome: ' + name.value;
      divCreated.appendChild(info);
    } else {
      let info = document.createElement('p');
      info.innerText = 'Preencha o nome corretamente';
      divCreated.appendChild(info);
    }

    if (email.value.length <= 50 && email.value.length > 0 && email.value.includes('@')) {
      let info = document.createElement('p');
      info.innerText = 'Email: ' + email.value;
      divCreated.appendChild(info);
    } else {
      let info = document.createElement('p');
      info.innerText = 'Preencha o email corretamente';
      divCreated.appendChild(info);
    }

    if (cpf.value.length <= 11 && cpf.value.length > 0) {
      let info = document.createElement('p');
      info.innerText = 'CPF: ' + cpf.value;
      divCreated.appendChild(info);
    } else {
      let info = document.createElement('p');
      info.innerText = 'Preencha o cpf corretamente';
      divCreated.appendChild(info);
    }

    if (endereco.value.length <= 200 && endereco.value.length > 0) {
      let info = document.createElement('p');
      info.innerText = 'Endereço: ' + endereco.value;
      divCreated.appendChild(info);
    } else {
      let info = document.createElement('p');
      info.innerText = 'Preencha o endereço corretamente';
      divCreated.appendChild(info);
    }

    if (cidade.value.length <= 200 && cidade.value.length > 0) {
      let info = document.createElement('p');
      info.innerText = 'Cidade: ' + cidade.value;
      divCreated.appendChild(info);
    } else {
      let info = document.createElement('p');
      info.innerText = 'Preencha a cidade corretamente';
      divCreated.appendChild(info);
    }

    clearButton.addEventListener('click', function() {
      for (let index = 0; index < curriculoCriado.children.length; index = 0) {
        input[index].value = '';
        curriculoCriado.children[index].remove();
      }

      for (let index = 0; index < input.length; index++) {
        input[index].value = '';
      }
    })
    curriculoCriado.appendChild(divCreated);
  })
}