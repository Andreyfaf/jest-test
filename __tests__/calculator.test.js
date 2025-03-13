
const { calculate, getHistory, clearHistory } = require("./calculator.js");

describe("Calculator functions", () => {
  beforeEach(() => {
    clearHistory(); 
  });

  test("Addition works correctly", () => {
    expect(calculate("+", 2, 3)).toBe(5);
  });

  test("Subtraction works correctly", () => {
    expect(calculate("-", 5, 3)).toBe(2);
  });

  test("Multiplication works correctly", () => {
    expect(calculate("*", 4, 3)).toBe(12);
  });

  test("Division works correctly", () => {
    expect(calculate("/", 10, 2)).toBe(5);
  });

  test("Division by zero returns Infinity", () => {
    expect(calculate("/", 10, 0)).toBe(Infinity);
  });

  test("Invalid operation returns NaN", () => {
    expect(calculate("?", 4, 2)).toBeNaN();
  });

  test("History is recorded correctly", () => {
    calculate("+", 1, 1);
    calculate("-", 5, 2);
    expect(getHistory()).toEqual([
      { operation: "+", a: 1, b: 1, result: 2 },
      { operation: "-", a: 5, b: 2, result: 3 },
    ]);
  });

  test("Clear history works correctly", () => {
    calculate("*", 3, 3);
    clearHistory();
    expect(getHistory()).toEqual([]);
  });
});