// Adiciona um ouvinte de evento ao documento para executar a função handleFormSubmit quando o conteúdo do DOM estiver totalmente carregado.
document.addEventListener('DOMContentLoaded', handleFormSubmit);

// Esta função é chamada quando o formulário é submetido.
function handleFormSubmit(event) {
    // Previne o comportamento padrão do evento de submissão do formulário (recarregar a página).
    event.preventDefault();
    // Chama a função para exibir a mensagem.
    displayMessage();
    // Chama a função para resetar o formulário.
    resetForm();
    // Chama a função para esconder a mensagem após um delay de 3000 milissegundos (3 segundos).
    hideMessageAfterDelay(3000);
}

// Esta função exibe a mensagem alterando o estilo de display do elemento de mensagem para 'block'.
function displayMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'block';
}

// Esta função reseta o formulário selecionando o elemento do formulário e chamando o método reset.
function resetForm() {
    const formElement = document.querySelector('form');
    formElement.reset();
}

// Esta função esconde a mensagem após um delay especificado.
function hideMessageAfterDelay(delay) {
    // Define um temporizador que executa uma função após o delay especificado.
    setTimeout(function() {
        const messageElement = document.getElementById('message');
        // Altera o estilo de display do elemento de mensagem para 'none', efetivamente escondendo-o.
        messageElement.style.display = 'none';
    }, delay);
}
