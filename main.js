const form = document.getElementById('form-atividade');
let linhas = '';
const atividade = [];
const notas = [];
const spanAprovado = '<span  class="resultado Aprovado">Aprovado</span>';
const spanReprovado = '<span  class="resultado Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizaMediaFinal();

});

function adicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputnotaAtividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida!`);
    } else {
    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputnotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value >= notaMinima ? imgAprovado :  imgReprovado }</td>`;
    linha += `</tr>`;

    linhas += linha
}

    inputNomeAtividade.value = '';
    inputnotaAtividade.value = '';
}
    


function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas
}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; 
}

function calculaMediaFinal() {
    let somadasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somadasNotas += notas[i];
    }

    return somadasNotas / notas.length;
} 