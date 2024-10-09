document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const imgLogo1 = document.querySelector('.livro-logo1'); // Seleciona a imagem do logo

    // Verifica a preferência do usuário salva no LocalStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true; // Mantém o toggle marcado
        imgLogo1.src = '../images/capa12.png'; // Caminho da imagem no modo escuro
    }

    // Função para ativar/desativar o modo escuro
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');

        // Salva a preferência do usuário no LocalStorage
      
    });
});
