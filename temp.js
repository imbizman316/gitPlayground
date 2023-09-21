const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect (sum(1, 2)).toBe(3);
})

/* test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
})

test('null',() => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
})

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeFalsy();
})

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
})

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test ('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();

  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!');
}) */
















