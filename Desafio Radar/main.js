let velocidadeAtual = 0;
let velocidadePermitida = 0;
let estadoDoSemaforo = "vermelho";
let iniciaEPara;

function acelerando() {
  let carro = document.getElementById("carro");
  velocidadeAtual += 10;

  verificarVelocidadePermitida();
  verificarEstadoDoSemaforo();

  if (velocidadeAtual === 0) return;

  carro.innerHTML = `Carro andando a ${velocidadeAtual} Km por hr `;
}

function desacelerando() {
  let carro = document.getElementById("carro");

  if (velocidadeAtual > 0) {
    velocidadeAtual -= 10;
    carro.innerHTML = `Carro andando a ${velocidadeAtual} Km por hr `;
  }

  if (velocidadeAtual === 0) {
    carro.innerHTML = "Carro parado";
  }
}

function verificarVelocidadePermitida() {
  if (velocidadeAtual > velocidadePermitida) {
    alert("Voce foi multado por excesso de velocidade. ");
    parar();
  }
}

function escolhendoVia(velocidadeDaVia) {
  velocidadePermitida = velocidadeDaVia;
  if (velocidadePermitida === "0") {
    document.getElementById("comecar").setAttribute("disabled", true);
  }
  if (velocidadePermitida !== "0") {
    document.getElementById("comecar").removeAttribute("disabled");
  }
  verificarVelocidadePermitida();
}

function verificarEstadoDoSemaforo() {
  if (estadoDoSemaforo === "vermelho" && velocidadeAtual > 0) {
    alert("Voce foi multado por ultrapassar o semaforo vermelho. ");
    parar();
  }
}

function alterarEstadoDoSemaforo() {
  const semaforoVermelho = document.getElementById("vermelho");
  const semaforoVerde = document.getElementById("verde");
  const semaforoAmarelo = document.getElementById("amarelo");

  if (estadoDoSemaforo === "vermelho") {
    estadoDoSemaforo = "verde";

    semaforoVermelho.classList.remove("Semaforo-vermelho");

    semaforoVermelho.classList.add("Semaforo-apagado");

    semaforoVerde.classList.remove("Semaforo-apagado");

    semaforoVerde.classList.add("Semaforo-verde");
    return;
  }

  if (estadoDoSemaforo === "verde") {
    estadoDoSemaforo = "amarelo";

    semaforoVerde.classList.remove("Semaforo-verde");

    semaforoVerde.classList.add("Semaforo-apagado");

    semaforoAmarelo.classList.remove("Semaforo-apagado");

    semaforoAmarelo.classList.add("Semaforo-amarelo");
    return;
  }

  if (estadoDoSemaforo === "amarelo") {
    estadoDoSemaforo = "vermelho";
    semaforoAmarelo.classList.remove("Semaforo-amarelo");

    semaforoAmarelo.classList.add("Semaforo-apagado");

    semaforoVermelho.classList.remove("Semaforo-apagado");

    semaforoVermelho.classList.add("Semaforo-vermelho");
    setTimeout(verificarEstadoDoSemaforo, 500);
  }
  console.log("Semaforo:", estadoDoSemaforo);
}

function iniciar(botaoComecar) {
  const botaoFinalizar = document.getElementById("finalizar");
  iniciaEPara = setInterval(alterarEstadoDoSemaforo, 3000);
  botaoComecar.style.display = "none";
  botaoFinalizar.style.display = "inline";
  botaoComecar = document.getElementById("acelera").removeAttribute("disabled");
  botaoComecar = document.getElementById("freia").removeAttribute("disabled");
}

function parar() {
  const botaoFinalizar = document.getElementById("finalizar");
  const botaoComecar = document.getElementById("comecar");
  clearInterval(iniciaEPara);

  botaoFinalizar.style.display = "none";
  botaoComecar.setAttribute("disabled", true);
  botaoComecar.style.display = "inline";

  document.getElementById("acelera").setAttribute("disabled", true);

  document.getElementById("freia").setAttribute("disabled", true);

  velocidadeAtual = 0;
  document.getElementById("carro").innerHTML = "Carro parado";

  document
    .getElementById(estadoDoSemaforo)
    .classList.remove(`Semaforo-${estadoDoSemaforo}`);

  document.getElementById(estadoDoSemaforo).classList.add("Semaforo-apagado");

  document.getElementById("vermelho").classList.add("Semaforo-vermelho");
  document.getElementById("vermelho").classList.remove("Semaforo-apagado");

  estadoDoSemaforo = "vermelho";
  document.getElementById("select").value = "0";
}

// como mudar o select no Javascript

// var element = document.getElementById("cmbTempo");
// var valorSel = element.options[element.selectedIndex].value;

// var select   = document.getElementById("cmbTempo");
// var variavel = '';
// select.onchange = function(){
//     variavel = this.value;
//     console.log(variavel);
// }
// <select id="cmbTempo" name="cmbTempo">
//     <option>Selecione:</option>
//     <option value="old" >Antigas</option>
//     <option value="new" selected="selected">Atuais</option>
// </select>
