// Seleciona todas as caixas de input da lista
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {

    // Salva cada caixa marcada da lista de metas

    checkbox.checked = localStorage.getItem(checkbox.id) === 'true';

    // Salva no navegador sempre que for marcada ou desmarcada

    checkbox.addEventListener('change', (e) => {
        localStorage.setItem(e.target.id, e.target.checked);
    });
});