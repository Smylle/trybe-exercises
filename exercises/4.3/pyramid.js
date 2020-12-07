//Por fim, faça uma pirâmide com n asteriscos de base:

let n = 5;
let column;
let inputLine = '';
let asterisk = '*';

let center = (n + 1) / 2;
let left = center;
let right= center;

for (index = 0; index <= center; index += 1) {
  for (column = 1; column <= n; column += 1) {
    if (column > right && column < left) {
      inputLine = inputLine + asterisk;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  right -= 1;
  left += 1;
}