var n = 5;
var linha = '';
var posicao = n;

for (var linhaAtual = 0; linhaAtual < n; linhaAtual++) {
    for (var colunaAtual = 1; colunaAtual <= n; colunaAtual++) {
        if (colunaAtual < posicao) {
            linha += ' ';
        } else {
            linha += '*';
        }
    }
    console.log(linha);
    linha = '';
    posicao--;
}