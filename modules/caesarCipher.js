const caesarCipher = (string, shift) => string.split('')
  .map((char) => {
    // This regular expression filters out non-letter characters
    const regex = /^[a-zA-Z]+$/;

    // if a character fails regex test, return character without modifying it.
    if (!regex.test(char)) return char;

    let uppercased = false;
    if (char.charCodeAt() > 64 && char.charCodeAt() < 91) uppercased = true;

    let charCode = char.toLowerCase().charCodeAt() + shift;
    if (charCode < 97) charCode += 26;
    if (charCode > 122) charCode -= 26;

    if (uppercased) return String.fromCharCode(charCode).toUpperCase();

    return String.fromCharCode(charCode);
  })
  .join('');

export default caesarCipher;
