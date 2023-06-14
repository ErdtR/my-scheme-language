const { tokenize } = require("../src/tokenize");

describe("tokenize", () => {
  it("should return empty array if the input is empty", () => {
    const result = tokenize("");

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
