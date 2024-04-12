/*  Objetivo 1 - Quando o usuário clicar no botão de "mostrar mais" deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão e mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - Identificar o clique no botão

        Passo 3 - Adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - esconder o botão de "mostrar mais"

        Passo 1 Pegar o botão e esconder ele

*/

// Objetivo 1 - Quando o usuário clicar no botão de "mostrar mais" deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão e mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const BotaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

BotaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    EsconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}

function EsconderBotao() {
    BotaoMostrarProjetos.classList.add('remover');
}
