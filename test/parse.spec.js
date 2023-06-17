const { parse } = require("../src/parse");

describe(parse, () => {
  it("should return token with type of NumericLiteral", () => {
    const tokens = [{ type: "Number", value: 1 }];

    const ast = { type: "NumericLiteral", value: 1 };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return token with type of StringLiteral", () => {
    const tokens = [{ type: "String", value: "abc" }];

    const ast = { type: "StringLiteral", value: "abc" };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return token with type of Identifier", () => {
    const tokens = [{ type: "Name", value: "a" }];

    const ast = { type: "Identifier", value: "a" };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return an AST for a basic data structure", () => {
    const tokens = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "add" },
      { type: "Number", value: 1 },
      { type: "Number", value: 2 },
      { type: "Parenthesis", value: ")" },
    ];

    const ast = {
      type: "CallExpression",
      name: "add",
      arguments: [
        { type: "NumericLiteral", value: 1 },
        { type: "NumericLiteral", value: 2 },
      ],
    };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return an AST for a basic nested data structure", () => {
    const tokens = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "add" },
      { type: "Number", value: 1 },
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "sub" },
      { type: "Number", value: 2 },
      { type: "Number", value: 1 },
      { type: "Parenthesis", value: ")" },
      { type: "Parenthesis", value: ")" },
    ];

    const ast = {
      type: "CallExpression",
      name: "add",
      arguments: [
        { type: "NumericLiteral", value: 1 },
        {
          type: "CallExpression",
          name: "sub",
          arguments: [
            { type: "NumericLiteral", value: 2 },
            { type: "NumericLiteral", value: 1 },
          ],
        },
      ],
    };

    expect(parse(tokens)).toEqual(ast);
  });
});
