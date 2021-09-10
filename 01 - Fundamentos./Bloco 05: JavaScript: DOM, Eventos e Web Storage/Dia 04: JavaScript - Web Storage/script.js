function darkMode() {
  let backgroundColor = 'white';
  let newColor = 'black';

  let botao = document.getElementById('darkMode');
  botao.addEventListener('click', function() {

    if (document.getElementsByTagName('body')[0].style.backgroundColor === newColor) {
      document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor;

    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = newColor;
    }
  })
}
darkMode();

function colorChanger() {
  let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray']

  let botao = document.getElementById('alteraCor');
  let index = 0;

  botao.addEventListener('click', function() {
    document.getElementsByTagName('body')[0].style.color = colors[index];
    index++

    if (index === 6)
      index = 0;
  })
}

colorChanger();

function sizeChanger() {
  let size = document.getElementsByTagName('body')[0].style.fontSize;

  let botao = document.getElementById('alteraTamanho');
  botao.addEventListener('click', function() {

    if (document.getElementsByTagName('body')[0].style.fontSize === size) {
      document.getElementsByTagName('body')[0].style.fontSize = '1.3em';
    } else document.getElementsByTagName('body')[0].style.fontSize = size;
  })
}
sizeChanger();

function spaceChanger() {
  let lineHeigth = document.getElementById('paragrafos').style.lineHeight;

  let botao = document.getElementById('alteraEspacamento');
  botao.addEventListener('click', function() {

    if (document.getElementById('paragrafos').style.lineHeight === lineHeigth) {
      document.getElementById('paragrafos').style.lineHeight = '2em';
    } else document.getElementById('paragrafos').style.lineHeight = lineHeigth;

  })
}
spaceChanger();

function familyChanger() {
  let family = document.getElementById('paragrafos').style.fontFamily;

  let botao = document.getElementById('alteraFonte');
  botao.addEventListener('click', function() {

    if (document.getElementById('paragrafos').style.fontFamily === family)
      document.getElementById('paragrafos').style.fontFamily = 'sans';
    else document.getElementById('paragrafos').style.fontFamily = family;
  })
}
familyChanger();