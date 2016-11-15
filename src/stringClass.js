const stringClass = {
  hasVowels() {
    return /[aeiou]/.test(this);
  },

  toUpper() { },

  toLower() { },

  ucFirst() { },

  isQuestion() { },

  words() { },

  wordCount() { },

  toCurrency() { },

  inverseCase() { },

  alternatingCase() { },

  getMiddle() { },

  numberWords() { },

  isDigit() { },

  doubleCheck() { },
};

Object.assign(String.prototype, stringClass);
