// Seleciona o botão e o ícone
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Verifica o tema salvo no localStorage e aplica o tema correspondente
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
document.body.classList.add(savedTheme);
themeIcon.textContent = savedTheme === 'dark-mode' ? 'wb_sunny' : 'brightness_2';

// Alterna o tema ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !isDarkMode);

    // Altera o ícone do botão
    themeIcon.textContent = isDarkMode ? 'brightness_2' : 'wb_sunny';

    // Salva a preferência do tema no localStorage
    localStorage.setItem('theme', isDarkMode ? 'light-mode' : 'dark-mode');
});
