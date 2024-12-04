const isuppercase = require('../utils/esmayuscula');

describe('comprueba MAYUSCULA = true', () => {
    test.each`
      firstValue | expectedResult    
      ${HOLA}    | ${true}
      ${casa}    | ${false}
      ${T}       | ${true}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isuppercase(firstValue)).toBe(expectedResult);
    });
  });