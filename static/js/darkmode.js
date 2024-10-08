document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Verifica a preferência do usuário salva no LocalStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true; // Mantém o toggle marcado
    }

    // Função para ativar/desativar o modo escuro
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        // Salva a preferência do usuário no LocalStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
