const capitalize = require('./testPractice');

test ('Capitalize the first letter', () => {
  expect(capitalize.capitalize('hello')).toBe('Hello');
  expect(capitalize.capitalize('wHAT')).toBe('WHAT');
})

test ('Reverse a string', () => {
  expect(capitalize.reverseString("how")).toBe("woh");
  expect(capitalize.reverseString("MonsTer")).toBe("reTsnoM");
})

test ('Test calculator', () => {
  expect(capitalize.calculator.add(2,5)).toBe(7);
  expect(capitalize.calculator.subtract(10,9)).toBe(1);
  expect(capitalize.calculator.divide(10,2)).toBe(5);
  expect(capitalize.calculator.divide(10,4)).toBe(2.5);
  expect(capitalize.calculator.divide(1,4)).toBe(0.25);
  expect( ()=> capitalize.calculator.divide(5,0)).toThrow(Error);
  expect(capitalize.calculator.divide(10,3)).toBeCloseTo(3.33);
  expect(capitalize.calculator.multiply(82,10)).toBe(820);
});

test ('Test cesarCypher', () => {
  expect(capitalize.caesarCipher("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD",3)).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
  expect(capitalize.caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",-3)).toBe("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD");
  expect(capitalize.caesarCipher("Defend the east wall of the castle",1)).toBe("Efgfoe uif fbtu xbmm pg uif dbtumf");
  expect(capitalize.caesarCipher("Efgfoe uif fbtu xbmm pg uif dbtumf",-1)).toBe("Defend the east wall of the castle");
});

let array1 = [1,8,3,4,2,6];
let array2 = [5,10,20,2,1,4,0];

test ('Test array analyze', () => {
  expect(capitalize.analyzeArray(array1)).toEqual({average: 4, min: 1, max: 8, length: 6});
  expect(capitalize.analyzeArray(array2)).toEqual({average: 6, min: 0, max: 20, length: 7});
})
