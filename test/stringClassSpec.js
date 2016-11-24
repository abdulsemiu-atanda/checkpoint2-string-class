describe('Has Vowels', () => {
  it('should return true if string contains vowels', () => {
    expect('sheila'.hasVowels()).toBeTruthy();
  });

  it('should return false for words without vowels', () => {
    expect('rhythm'.hasVowels()).toBeFalsy();
  });
});

describe('To Uppercase', () => {
  it('should return string in all caps', () => {
    expect('sheila'.toUpper()).toEqual('SHEILA');
  });

  it('should be able to handle characters', () => {
    expect('rhy$th#?m'.toUpper()).toEqual('RHY$TH#?M');
  });
});

describe('To Lowercase', () => {
  it('should return all string content in lowercase', () => {
    expect('SHEILA'.toLower()).toEqual('sheila');
  });

  it('should be able to handle characters', () => {
    expect('RHY$TH#?M'.toLower()).toEqual('rhy$th#?m');
  });
});

describe('Uc First', () => {
  it('should return string with first letter in caps', () => {
    expect('sheila'.ucFirst()).toEqual('Sheila');
  });

  it('should be able to handle characters', () => {
    expect('rhy$th#?m'.ucFirst()).toEqual('Rhy$th#?m');
  });
});

describe('isQuestion', () => {
  it('should return true if string is a question', () => {
    expect('sheila?'.isQuestion()).toBeTruthy();
  });

  it('should return false if string is not a question', () => {
    expect('rhy$th#?m'.isQuestion()).toBeFalsy();
  });
});

describe('Words', () => {
  it('should return true if string contains multiple words', () => {
    expect(typeof 'sheila is awesome at her job'.words()).toBe('object');
  });

  it('should return array if string contains multiple words', () => {
    expect(Array.isArray('sheila is awesome at her job'.words())).toBeTruthy();
  });
});

describe('Words count', () => {
  it('should return number of words in a string', () => {
    expect('sheila is awesome at her job'.wordCount()).toEqual(6);
  });

  it('should be able to handle special characters', () => {
    expect('she$ila is awe%/some at her job'.wordCount()).toEqual(6);
  });
});

describe('To Currency', () => {
  it('should return string in currency format', () => {
    expect('20003.67'.toCurrency()).toEqual('20,003.67');
  });

  it('should return string in currency format with decimal', () => {
    expect('20003'.toCurrency()).toEqual('20,003.00');
  });
});

describe('From Currency', () => {
  it('should return string in number format', () => {
    expect('20,003.67'.fromCurrency()).toEqual('20003.67');
  });
});

describe('Inverse case', () => {
  it('should return string with previously caps to lowercase and viz', () => {
    expect('Mr. Ben'.inverseCase()).toEqual('mR. bEN');
  });
});

describe('Alternating case', () => {
  it('should return string with cases interchanged', () => {
    expect('Onomatopoeia'.alternatingCase()).toEqual('oNoMaToPoEiA');
  });
});

describe('Get Middle', () => {
  it('should return character at the middle of string if odd', () => {
    expect('ready'.getMiddle()).toEqual('a');
  });

  it('should return two character at the middle of string if even', () => {
    expect('read'.getMiddle()).toEqual('ea');
  });
});

describe('Number words', () => {
  it('should return numbers as words', () => {
    expect('325'.numberWords()).toEqual('three two five');
  });
});

describe('isDigit', () => {
  it('should return true if string is single digit', () => {
    expect('3'.isDigit()).toBeTruthy();
  });

  it('should return false for digits more that one', () => {
    expect('37'.isDigit()).toBeFalsy();
  });
});

describe('Double Check', () => {
  it('should return true if character occurs twice', () => {
    expect('aa'.doubleCheck()).toBeTruthy();
  });

  it('should return false if character does not repeat', () => {
    expect('a'.doubleCheck()).toBeFalsy();
  });
});
