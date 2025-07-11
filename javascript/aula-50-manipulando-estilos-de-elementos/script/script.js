const quadrado = document.getElementById('quadrado');

function modificarEstilo(corDeFundo, largura, altura) {
    quadrado.style.background = corDeFundo;

    if (largura) quadrado.style.width = largura;
    if (altura) quadrado.style.height = altura;
}

document.getElementById('btn-vermelho').addEventListener('click', () => {
    modificarEstilo('#FF0000', '200px');
});

document.getElementById('btn-verde').addEventListener('click', () => {
    modificarEstilo('#00FF00', '300px', '200px');
});

document.getElementById('btn-azul').addEventListener('click', () => {
    modificarEstilo('#0000FF', '50px', '500px');
});