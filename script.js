const ButtonTheme = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Define tema inicial com fallback
const savedTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(savedTheme);
themeIcon.textContent = savedTheme === 'light-theme' ? '🌙' : '🌞';

// Alterna tema ao clicar
ButtonTheme.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
    themeIcon.textContent = '🌞';
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light-theme');
  }

  // Aplica rotação
  themeIcon.classList.add('rotate');
  setTimeout(() => themeIcon.classList.remove('rotate'), 600);
});
// Estrutura de busca
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const nameElement = card.querySelector('.flower_name');
        const plantName = nameElement.textContent.toLowerCase();

        if (plantName.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});