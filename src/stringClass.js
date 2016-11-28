const stringClass = {
  /**
   * This method takes a string and tests if it contains vowels
   * @param {String} this
   * @return {Boolean} true or false
   */
  hasVowels() {
    return /[aeiou]/.test(this);
  },

/**
   * This method takes a string and returns it in uppercase
   * @param {String} this
   * @return {String} this
   */
  toUpper() {
    return this.replace(/[a-z]/g, caps =>
      String.fromCharCode(caps.charCodeAt(0) - 32)
    );
  },

/**
   * This method takes a string and returns it in lowercase
   * @param {String} this
   * @return {String} this
   */
  toLower() {
    return this.replace(/[A-Z]/g, lower =>
      String.fromCharCode(lower.charCodeAt(0) + 32)
    );
  },

/**
   * This method takes a string and returns its first letter in uppercase
   * @param {String} this
   * @return {String} this
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

/**
   * This method takes a string and checks if it's a question
   * @param {String} this
   * @return {Boolean} true or false
   */
  isQuestion() {
    return /[\w\s]+(.)\?$/.test(this);
  },

/**
   * This method takes a string and check if it has multiple words
   * @param {String} this
   * @return {Array} array
   */
  words() {
    return this.replace(/[^\w\s]/g, '').split(/\s+/);
  },
/**
   * This method takes a string and returns the number of words it contains
   * @param {String} this
   * @return {Integer} number
   */
  wordCount() {
    return this.words().length;
  },

/**
   * This method takes a string in float type and returns it in currency format
   * @param {String} this
   * @return {String} this
   */
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

/**
   * This method takes a string in currency format and converts to float type
   * @param {String} this
   * @return {String} this
   */
  fromCurrency() {
    return this.replace(/(\.00|,)/g, '');
  },

/**
   * This method takes a string and make lowercase letter uppercase and viz
   * @param {String} this
   * @return {String} this
   */
  inverseCase() {
    return this.replace(/\w/g, (character) => /[a-z]/
        .test(character) ? character.toUpper() : character.toLower());
  },

/**
   * This method takes a string and returns it with cases interchanged
   * @param {String} this
   * @return {String} this
   */
  alternatingCase() {
    return this.replace(/\w/g, (word, i) => (i + 1) % 2 === 0 ?
    word.toUpper() : word.toLower());
  },

/**
   * This method takes a string and returns character at the middle
   * @param {String} this
   * @return {String} this
   */
  getMiddle() {
    const middle = this.length / 2;
    return middle === parseInt(middle, 10) ?
    this.substr(middle - 1, 2) : this.charAt(middle);
  },

/**
   * This method takes a string in numbers and returns as words
   * @param {String} this
   * @return {String} this
   */
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
    return this.replace(/[0-9]/g, digit => `${numWords[digit]} `)
    .replace(/\s+$/, '');
  },

/**
   * This method takes a string and checks if it's a single digit
   * @param {String} this
   * @return {Boolean} true or false
   */
  isDigit() {
    return /^[-+]?\d$/g.test(this);
  },

/**
   * This method takes a string and checks if character occurs twice
   * @param {String} this
   * @return {Boolean} true or false
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  },
};

Object.assign(String.prototype, stringClass);
