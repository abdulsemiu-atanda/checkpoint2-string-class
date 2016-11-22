const stringClass = {
  hasVowels() {
    return /[aeiou]/.test(this);
  },

  toUpper() {
    return this.replace(/[a-z]/g, caps =>
      String.fromCharCode(caps.charCodeAt(0) - 32)
    );
  },

  toLower() {
    return this.replace(/[A-Z]/g, lower =>
      String.fromCharCode(lower.charCodeAt(0) + 32)
    );
  },

  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  isQuestion() {
    return /\?$/.test(this);
  },

  words() {
    return this.replace(/[^\w\s]/g, '').split(/\s+/);
  },

  wordCount() {
    return this.words().length;
  },

  toCurrency() { },

  inverseCase() {
    return this.replace(/\w/g, (character) =>
      /[a-z]/.test(character) ? character.toUpper() : character.toLower()
    );
  },

  alternatingCase() { },

  getMiddle() { },

  numberWords() { },

  isDigit() { },

  doubleCheck() { },
};

Object.assign(String.prototype, stringClass);
