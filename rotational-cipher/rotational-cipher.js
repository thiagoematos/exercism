String.prototype.toArrayOfString = function () {
  return this.split('');
}
Array.prototype.toString = function () {
  return this.join('');
}

const QUANTITY_OF_LETTERS_ON_ALPHABET = 26;

class AsciiCode {

  static #LETTER_A_UPPERCASE = 65;
  static #LETTER_Z_UPPERCASE = 90;
  static #LETTER_A_LOWERCASE = 97;
  static #LETTER_Z_LOWERCASE = 122;

  #value

  constructor(character) {
    this.#value = character.charCodeAt(0);
  }

  #isLowerCase() {
    return this.#value >= AsciiCode.#LETTER_A_LOWERCASE && this.#value <= AsciiCode.#LETTER_Z_LOWERCASE
  }

  #isUpperCase() {
    return this.#value >= AsciiCode.#LETTER_A_UPPERCASE && this.#value <= AsciiCode.#LETTER_Z_UPPERCASE
  }

  #isNotLetter() {
    return !this.#isLowerCase() && !this.#isUpperCase();
  }

  #isAfterLowerCaseZ(result) {
    return this.#isLowerCase() && result > AsciiCode.#LETTER_Z_LOWERCASE;
  }

  #isAfterUpperCaseZ(result) {
    return this.#isUpperCase() && result > AsciiCode.#LETTER_Z_UPPERCASE;
  }

  #isNecessaryRotateToBeginning(result) {
    return this.#isAfterLowerCaseZ(result) || this.#isAfterUpperCaseZ(result);
  }

  shift(numberOfRotation) {
    if (this.#isNotLetter()) return;

    const result = this.#value + numberOfRotation;
    if (this.#isNecessaryRotateToBeginning(result)) {
      this.#value = result - QUANTITY_OF_LETTERS_ON_ALPHABET;
    } else {
      this.#value += numberOfRotation;
    }
  }

  toCharacter() {
    return String.fromCharCode(this.#value);
  }
}

export const rotate = (word, numberOfRotation) =>
  word
    .toArrayOfString()
    .map(letter => {
      const asciiCode = new AsciiCode(letter);
      asciiCode.shift(numberOfRotation);
      return asciiCode.toCharacter();
    })
    .toString();
