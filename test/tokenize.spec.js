const { tokenize } = require("../src/tokenize");

describe("tokenize", () => {
  it("should return empty array if the input is empty", () => {
    const result = tokenize("");

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it("should be able to tokenize pair parentheses", () => {
    const result = tokenize("()");
    const expectedResults = [
      { type: "Parenthesis", value: "(" },
      { type: "Parenthesis", value: ")" },
    ];

    expect(result).toStrictEqual(expectedResults);
  });

  it("should ignore whitespace", () => {
    const result = tokenize("             ");
    const expectedResults = [];

    expect(result).toStrictEqual(expectedResults);
  });

  it("should be able to tokenize single-digit number and letters", () => {
    const result = tokenize("(a 1 2)");
    const expectedResults = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "a" },
      { type: "Number", value: 1 },
      { type: "Number", value: 2 },
      { type: "Parenthesis", value: ")" },
    ];

    expect(result).toStrictEqual(expectedResults);
  });

  it("should be able to tokenize multi-digit numbers", () => {
    const result = tokenize("(a 10 20)");
    const expectedResults = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "a" },
      { type: "Number", value: 10 },
      { type: "Number", value: 20 },
      { type: "Parenthesis", value: ")" },
    ];

    expect(result).toStrictEqual(expectedResults);
  });

  it("should be able to tokenize multi-digit symbols", () => {
    const result = tokenize("(abc 1 2)");
    const expectedResults = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "abc" },
      { type: "Number", value: 1 },
      { type: "Number", value: 2 },
      { type: "Parenthesis", value: ")" },
    ];

    expect(result).toStrictEqual(expectedResults);
  });

  it("should be able to tokenize string", () => {
    const result = tokenize(`(a "test1" "test2")`);
    const expectedResults = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "a" },
      { type: "String", value: "test1" },
      { type: "String", value: "test2" },
      { type: "Parenthesis", value: ")" },
    ];

    expect(result).toStrictEqual(expectedResults);
  });
});
