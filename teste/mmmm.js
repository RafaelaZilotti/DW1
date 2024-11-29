const botao = document.getElementById("claro");

botao.addEventListener("click", modoClaro);

function modoClaro() {
    // Pega o valor atual da variável CSS '--ciano'
    const cianoAtual = getComputedStyle(document.documentElement).getPropertyValue('--ciano').trim();

    if (cianoAtual === 'rgb(255, 0, 0)') {
        // Se o valor de '--ciano' for vermelho, então volta ao estado original
        document.documentElement.style.setProperty('--ciano', 'rgb(0, 255, 255)'); // Muda para ciano
        document.documentElement.style.setProperty('--vermelho', 'rgb(255, 0, 0)'); // Muda para vermelho
    } else {
        // Se não for, então muda para o modo claro
        document.documentElement.style.setProperty('--ciano', 'rgb(255, 0, 0)'); // Muda para vermelho
        document.documentElement.style.setProperty('--vermelho', 'rgb(0, 255, 255)'); // Muda para ciano
    }
}
