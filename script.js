const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');
const themeToggle = document.getElementById('theme-toggle');

// Atualiza a contagem de caracteres em tempo real
textarea.addEventListener('input', () => {
  contador.textContent = textarea.value.length;
});

// Alterna entre os modos claro e escuro
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // Alterna a classe 'dark'

  // Atualiza o ícone do botão
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️'; // Sol para o modo claro
  } else {
    themeToggle.textContent = '🌙'; // Lua para o modo escuro
  }
});
