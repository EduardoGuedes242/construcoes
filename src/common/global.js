export function arredondarParaCima(numero) {
  if (numero % 1 !== 0) {
    return parseInt(numero) + 1;
  }
  return numero;
}
