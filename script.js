let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let cron;
let ativo = false;

function formatarNumero(n) {
  return n < 10 ? '0' + n : n;
}

function atualizarDisplay() {
  document.getElementById('tempo').innerText =
    `${formatarNumero(minutos)}:${formatarNumero(segundos)}:${formatarNumero(milissegundos)}`;
}

function iniciar() {
  if (!ativo) {
    cron = setInterval(() => {
      milissegundos++;
      if (milissegundos === 100) {
        milissegundos = 0;
        segundos++;
      }
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      atualizarDisplay();
    }, 10);
    ativo = true;
  }
}

function pausar() {
  clearInterval(cron);
  ativo = false;
}

function zerar() {
  clearInterval(cron);
  milissegundos = 0;
  segundos = 0;
  minutos = 0;
  atualizarDisplay();
  ativo = false;
}
