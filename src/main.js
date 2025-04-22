document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // serve para selecionar os botões com data-tab-button dentro do HTML, caso eu quisesse algo em especifico teria que colocar um = ex: =em_breve
    

    for (let i = 0; i < buttons.length; i++) {  // função para adicionar o evento de clique nos botões e para acessá-lo                             | Função para adicionar um evento
        buttons[i].addEventListener('click', function(botao) { // função para acessar o código do botão ao clicar nele                              | Função para adicionar o evento de clique dentro dos botões
            const abaAlvo = botao.target.dataset.tabButton; // serve para acessar o código de data escrito dentro do HTML                           | Função para acessar a variavel data-tab-button dentro do HTML
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`) //                                                                       | Função para pesquisar dentro dos tab-id onde o valor esteja igual ao abaAlvo
            escondeTodasAbas(); // forma de "chamar" a função abaixo                                                                                | Função para excluir a classe shows__list--is-active caso o botão esteja com ela
            aba.classList.add('shows__list--is-active'); // serve para adicionar a classe 'shows__list--is-active' dentro do elemento no HTML       | Função para adicionar a classe shows__list--is-active
            removeBotaoAtivo();                 // o principio é o mesmo que de cima, remove dentro dos botões a classe shows__list--is-active
            botao.target.classList.add('shows__tabs__button--is-active');  // adiciona dentro dos botões a classe shows__tabs__button--is-active
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {                           
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // serve para selecionar os data-tab-id dentro do HTML

    for (let i = 0; i < tabsContainer.length; i++) {                       // função para acessar o data-tab-id e remover a classe shows__list--is-active
        tabsContainer[i].classList.remove('shows__list--is-active') 
    }
}