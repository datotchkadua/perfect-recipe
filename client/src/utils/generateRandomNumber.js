export function generateRandomNumber() {
  const randomNumber = Math.random() * 2 + 3;
  const numberWithDecimal = +randomNumber.toFixed(1);
  return numberWithDecimal;
}
