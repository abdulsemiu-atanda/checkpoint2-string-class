describe('hasVowels', () => {
  it('should return true if string contains vowels', () => {
    expect('sheila'.hasVowels()).toBeTruthy();
  });

  it('should case insensitive', () => {
    expect('shEIla'.hasVowels()).toBeTruthy();
  });

  it('should return false for words without vowels', () => {
    expect('rhythm'.hasVowels()).toBeFalsy();
  });
});

describe('toUpper', () => {
  it('should return string in all caps', () => {
    expect('sheila'.toUpper()).toEqual('SHEILA');
  });

  it('should be able to handle characters', () => {
    expect('rhy$th#?m'.toUpper()).toEqual('RHY$TH#?M');
  });
});

describe('toLower', () => {
  it('should return all string content in lowercase', () => {
    expect('SHEILA'.toLower()).toEqual('sheila');
  });

  it('should be able to handle characters', () => {
    expect('RHY$TH#?M'.toLower()).toEqual('rhy$th#?m');
  });
});

describe('ucFirst', () => {
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

  it('should return false if string contains no word character', () => {
    expect('???'.isQuestion()).toBeFalsy();
  });
});

describe('words', () => {
  it('should return true if string contains multiple words', () => {
    expect(typeof 'sheila is awesome at her job'.words()).toBe('object');
  });

  it('should return array if string contains multiple words', () => {
    expect(Array.isArray('sheila is awesome at her job'.words())).toBeTruthy();
  });

  it('should return true if string contains multiple words', () => {
    const result = ['sheila','is','awesome','at','her','job'];
    expect('sheila is awesome at her job'.words()).toEqual(result);
  });
});

describe('wordCount', () => {
  it('should return number of words in a string', () => {
    expect('sheila is awesome at her job'.wordCount()).toEqual(6);
  });

  it('should be able to handle special characters', () => {
    expect('she$ila is awe%/some at her job'.wordCount()).toEqual(6);
  });
});

describe('toCurrency', () => {
  it('should return string in currency format', () => {
    expect('20003.67'.toCurrency()).toEqual('20,003.67');
  });

  it('should return string in currency format with decimal', () => {
    expect('20003'.toCurrency()).toEqual('20,003.00');
  });
});

describe('fromCurrency', () => {
  it('should return string in number format', () => {
    expect('20,003.67'.fromCurrency()).toEqual('20003.67');
  });

  it('should return a number format without insignificant zero', () => {
    expect('20,003.00'.fromCurrency()).toEqual('20003');
  });
});

describe('inverseCase', () => {
  it('should return string with previously caps to lowercase and viz', () => {
    expect('Mr. Ben'.inverseCase()).toEqual('mR. bEN');
  });
});

describe('alternatingCase', () => {
  it('should return string with cases interchanged', () => {
    expect('Onomatopoeia'.alternatingCase()).toEqual('oNoMaToPoEiA');
  });
});

describe('getMiddle', () => {
  it('should return character at the middle of string if odd', () => {
    expect('ready'.getMiddle()).toEqual('a');
  });

  it('should return two character at the middle of string if even', () => {
    expect('read'.getMiddle()).toEqual('ea');
  });
});

describe('numberWords', () => {
  it('should return numbers as words', () => {
    expect('325'.numberWords()).toEqual('three two five');
  });
});

describe('isDigit', () => {
  it('should return true if string is single digit', () => {
    expect('3'.isDigit()).toBeTruthy();
  });

  it('should return true for digit with sign', () => {
    expect('+3'.isDigit()).toBeTruthy();
  });

  it('should return false for digits more that one', () => {
    expect('37'.isDigit()).toBeFalsy();
  });
});

describe('doubleCheck', () => {
  it('should return true if character occurs twice', () => {
    expect('aa'.doubleCheck()).toBeTruthy();
  });

  it('should return false if character does not repeat', () => {
    expect('a'.doubleCheck()).toBeFalsy();
  });

  it('should return true for double whitespaces', () => {
    expect('  '.doubleCheck()).toBeTruthy();
  });
});
