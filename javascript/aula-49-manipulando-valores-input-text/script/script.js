document.getElementById('entrada').addEventListener('keyup', distribuiCaracter);

function distribuiCaracter() {

    //selecionar o valor digitado
    const input = document.getElementById('entrada');
    const caracter = input.value.trim();

    //evita múltiplos caracteres
    if (caracter.length !== 1) return;

    //limpar o campo de digitação
    input.value = '';

    if (/\d/.test(caracter)) {
        document.getElementById('apenas-numeros').value += caracter;
    } else if (/[a-zA-Z]/.test(caracter)) {
        document.getElementById('apenas-letras').value += caracter;
    }
}