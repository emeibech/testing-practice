const caesarCipher = (string, shift) => string.split('')
  /* Split('') creates an array with each individual character as its elements.
  Chaining map would iterate over that array and process the elements. */
  .map((char) => {
    // This regular expression filters out non-letter characters
    const regex = /^[a-zA-Z]+$/;

    // if a character fails regex test, return character without modifying it.
    if (!regex.test(char)) return char;

    /* CharCodeAt() returns a number representing the UTF-16 code unit.
    Uppercase and lowercase letters have different set of charcodes.
    Uppercase starts from 65(A) and ends in 90(Z) while
    lowercase starts from 97(a) and ends in 122(z). */
    let charCode = char.charCodeAt();

    /* These control statements ensure that charCode doesn't go outside
    of its respective set of charcodes. */
    if (charCode > 64 && charCode < 91) {
      charCode += shift;

      if (charCode < 65) {
        charCode += 26;
      } else if (charCode > 90) charCode -= 26;
    }

    if (charCode > 96 && charCode < 123) {
      charCode += shift;

      if (charCode < 97) {
        charCode += 26;
      } else if (charCode > 122) charCode -= 26;
    }

    // Turn charCode value back to string equivalent and return it.
    return String.fromCharCode(charCode);
  })
  /* The array created by map now contains the shifted characters.
  Join('') just turns that array back to string. */
  .join('');

export default caesarCipher;
