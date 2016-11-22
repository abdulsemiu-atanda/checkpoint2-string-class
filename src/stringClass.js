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

  toCurrency() {
    const digits = this.split(/\./);
    digits[1] = digits[1] || '00';
    digits[0] = digits[0].split('').reverse().join('')
      .replace(/\d{3}/, value => `${value},`)
      .split('')
      .reverse()
      .join('');
    return `${digits[0]}.${digits[1]}`;
  },

  fromCurrency() {
    return this.replace(/,/g, '');
  },

  inverseCase() {
    return this.replace(/\w/g, (character) => {
      return /[a-z]/
        .test(character) ? character.toUpper() : character.toLower();
    });
  },

  alternatingCase() { },

  getMiddle() { },

  numberWords() { },

  isDigit() {
    return /^\d$/g.test(this);
  },

  doubleCheck() {
    return /(.)\1{1}/.test(this);
  },
};

Object.assign(String.prototype, stringClass);
