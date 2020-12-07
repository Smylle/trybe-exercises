//Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let column;
let asterisk = '*';
let lineInput = '';
let positionInput = n;

for (index = 0; index < n; index += 1) {
  for (column = 0; column <= n; column += 1) {
    if (column < positionInput) {
      lineInput = lineInput + ' ';
    } else {
      lineInput = lineInput + asterisk;
    }
  }
  console.log(lineInput);
  lineInput = '';
  positionInput -= 1;
}