// ASSINATURA DE FUNÇÃO => (parametro: Tipo): Retorno
function soma(numero1: number, numero2: number): number {
  // if (typeof numero2 !== 'number') {
  //   return undefined;
  // }

  return numero1 + numero2;
}

// Chamadas
const resultado1: number = soma(1, 2);
const resultado2 = soma(1, 2);

// Exibir
console.log(resultado1);
console.log(resultado2);
