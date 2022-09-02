function add7(num) {
  return num + 7;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(str) {
  const firstChar = str[0].toUpperCase();
  const spliced = str.slice(1).toLowerCase();
  return `${firstChar + spliced}`;
}

function lastLetter(str) {
  return str.slice(-1);
}
