function Facto(number) {
  let counter = 0;
  if (number < 0) {
    counter++;
    return { counter };
  } else {
    counter++;
  }

  if (!(number % 2)) {
    counter++;
    return { x: number / 2, y: 2, counter };
  } else {
    counter++;
  }
  let num1, num2;
  let num = Math.ceil(Math.sqrt(number));
  for (let k = 0; k >= 0; k++) {
    num1 = num + k;
    counter++;
    let del = Math.pow(num1, 2) - number;
    if (del < 0) continue;
    let del1 = Math.sqrt(del);
    if (Number.isInteger(del1)) {
      num2 = del1;
      break;
    }
  }
  let x = num1 - num2;
  let y = num1 + num2;

  return { x: x, y: y, counter};
}
console.log(Facto(1235));
export default Facto;
