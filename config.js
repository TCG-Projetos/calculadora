// Configurações fixas (iguais à planilha)
const CONFIG = {
  valorHora: 5.0, // valor da hora máquina

  filamento: {
    padrao: 0.60,      // R$/g filamento padrão
    engenharia: 1.00   // R$/g filamento engenharia
  },

  complexidade: {
    padrao: 0,     // 0%
    media: 0.25,   // +25%
    alta: 0.40     // +40%
  },

  // função para calcular desconto gradativo
  calcularDesconto: function (gramas) {
    if (gramas <= 50) {
      return 0;
    } else if (gramas >= 1000) {
      return 0.65;
    } else {
      // interpolação linear entre 50g (10%) e 1000g (65%)
      const inicio = 50;
      const fim = 1000;
      const descontoInicio = 0.10;
      const descontoFim = 0.65;

      return descontoInicio + ((gramas - inicio) / (fim - inicio)) * (descontoFim - descontoInicio);
    }
  }
};

