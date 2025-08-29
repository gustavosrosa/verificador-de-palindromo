let inputPalavra = document.querySelector('#inputPalavra');
let btnVerificarPalindromo = document.querySelector('#verificarPalindromo');
let resultadoP = document.querySelector('#resultado');

btnVerificarPalindromo.addEventListener('click', () => {
    let palavraSemAcentos = inputPalavra.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let palavraSemCaracteres = palavraSemAcentos.replace(/[^a-zA-Z0-9]/g, '');
    let palavraSemEspacos = palavraSemCaracteres.replaceAll(' ', '');

    const palavraInvertida = palavraSemEspacos.split('').reverse().join('')
    console.log(palavraSemEspacos, palavraInvertida)

    if (palavraInvertida == palavraSemEspacos) {
        resultadoP.textContent = `A palavra ${inputPalavra.value} é um palíndromo!`;
    } else {
        resultadoP.textContent = `A palavra ${inputPalavra.value} não é um palíndromo!`;
    }
});