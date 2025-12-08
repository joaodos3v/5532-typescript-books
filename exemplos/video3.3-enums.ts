
enum BookStatus {
  DISPONIVEL = 'disponível',
  EMPRESTADO = 'emprestado',
  MANUTENCAO = 'manutenção',
}

const novoLivro: Book = {
  status: BookStatus.MANUTENCAO // em manutenção
}

// PONTOS NEGATIVOS AO NÃO USAR ENUM
// Repetir isso em todo componente que precisar
if (statusLivro === 'disponível') { }

// Frágil (nao exibiria corretamente, chance de erro)
if (statusLivro === 'em manutencao') { }