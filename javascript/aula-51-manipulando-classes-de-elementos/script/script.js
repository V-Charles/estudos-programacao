const mensagem = document.getElementById('mensagem');

function modificaClasse() {
    mensagem.classList.toggle('estilo2');
}

document.getElementById('btn-modifica').addEventListener('click', modificaClasse);