const submitButton = document.getElementById("submit") as HTMLButtonElement;

const stringToBinary = (str: string): string => {
  return str
    .split('')
    .map((char: string) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

submitButton.onclick = function() {
  const stringInput = document.getElementById("string") as HTMLInputElement;
  const string = stringInput.value;
  const binary = stringToBinary(string);
  document.getElementById("binary").innerText = binary;
}