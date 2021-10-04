var n = 5;
var linha = '';
posicao = n;

for (var linhaAtual = 0; linhaAtual < n; linhaAtual++) {
    for (var coluna = 0; coluna <= n; coluna += 2.5) {
        if (coluna < posicao)
            linha += ' ';
        else { linha += '*' }
    }
    console.log(linha);
}


linha = '';
posicao -= 5;