function calcular() {
  const gramas = parseFloat(document.getElementById("gramas").value) || 0;
  const tempo  = parseFloat(document.getElementById("tempo").value)  || 0;
  const filamento = document.getElementById("filamento").value;
  const complexidade = document.getElementById("complexidade").value;
  const quantidade = parseFloat(document.getElementById("quantidade").value) || 1;

  const custoFilamento = CONFIG.filamento[filamento] * gramas;
  const custoTempo = CONFIG.valorHora * tempo;
  const custoBase = custoFilamento + custoTempo;

  const desconto = CONFIG.calcularDesconto(gramas);
  const valorComDesconto = custoBase * (1 - desconto);

  const acrescimo = CONFIG.complexidade[complexidade] || 0;
  const valorFinal = valorComDesconto * (1 + acrescimo);
  const valorUnitario = valorFinal / quantidade;

  document.getElementById("valorTotal").innerText = "R$ " + valorFinal.toFixed(2).replace(".", ",");
  document.getElementById("valorUnitario").innerText = "R$ " + valorUnitario.toFixed(2).replace(".", ",");
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", calcular);
});
