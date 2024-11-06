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


//Rolagem suave:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


//voltar pra cima

const backToTopBtn = document.getElementById('backToTop');

// Mostrar o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Rolagem suave para o topo
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//Leia-Mais

const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

readMoreBtn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        readMoreBtn.textContent = 'Leia menos';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Leia mais';
    }
});
