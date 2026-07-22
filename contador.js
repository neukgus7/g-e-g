const dataInicial = new Date('2025-01-18T00:00:00');

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicial;

    if (diff < 0) diff = 0;

    const segundosTotais = Math.floor(diff / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    const anos = Math.floor(diasTotais / 365);
    const dias = diasTotais % 365;
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    document.getElementById('anos').textContent = anos;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();