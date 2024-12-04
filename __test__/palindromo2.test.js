const palindromo = require('../utils/palindromo');
describe('palindromo', () => {
    test.each`
      firstValue | expectedResult    
      ${"HOLA"}  | ${"ALOH"} 
      ${"ROCA"}  | ${"ACOR"} 
      ${"BOCA"}  | ${"ACOB"}       
    `('comprobar el palindromo de $firstValue, el resultado en $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });