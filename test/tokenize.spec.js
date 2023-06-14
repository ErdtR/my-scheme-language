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
});
