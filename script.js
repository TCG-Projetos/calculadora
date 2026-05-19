function calcular() {
  const gramas = parseFloat(document.getElementById("gramas").value) || 0;
  const tempo = parseFloat(document.getElementById("tempo").value) || 0;
  const filamento = document.getElementById("filamento").value;
  const complexidade = document.getElementById("complexidade").value;
  const quantidade = parseFloat(document.getElementById("quantidade").value) || 1;

  // Custo do material
  const custoMaterial = CONFIG.filamento[filamento] * gramas;

  // Custo da hora máquina
  const custoTempo = CONFIG.valorHora * tempo;

  // Custo base: material + hora máquina
  const custoBase = custoMaterial + custoTempo;

  // Lucro conforme complexidade
  const lucro = CONFIG.complexidade[complexidade] || CONFIG.complexidade.padrao;

  // Valor final com lucro
  const valorFinal = custoBase * (1 + lucro);

  // Valor unitário
  const valorUnitario = valorFinal / quantidade;

  document.getElementById("valorTotal").innerText =
    "R$ " + valorFinal.toFixed(2).replace(".", ",");

  document.getElementById("valorUnitario").innerText =
    "R$ " + valorUnitario.toFixed(2).replace(".", ",");
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", calcular);
});
