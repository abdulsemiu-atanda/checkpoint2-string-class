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
    return this.replace(/\w/g, (character) => /[a-z]/
        .test(character) ? character.toUpper() : character.toLower());
  },

  alternatingCase() {
    return this.replace(/\w/g, (word, i) => (i + 1) % 2 === 0 ?
    word.toUpper() : word.toLower());
  },

  getMiddle() {
    const middle = this.length / 2;
    return middle === parseInt(middle, 10) ?
    this.substr(middle - 1, 2) : this.charAt(middle);
  },

  numberWords() {
    const numWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    return this.replace(/[0-9]/g, digit => `${numWords[digit]} `).trim();
  },

  isDigit() {
    return /^\d$/g.test(this);
  },

  doubleCheck() {
    return /(.)\1{1}/.test(this);
  },
};

Object.assign(String.prototype, stringClass);
