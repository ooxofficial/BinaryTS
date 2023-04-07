const submitButton = document.getElementById("submit");
const stringToBinary = (str) => {
    return str
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
};
submitButton.onclick = function () {
    const stringInput = document.getElementById("string");
    const string = stringInput.value;
    const binary = stringToBinary(string);
    document.getElementById("binary").innerText = binary;
};
