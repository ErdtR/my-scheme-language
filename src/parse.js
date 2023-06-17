const { isStartParenthesis, isEndParenthesis } = require("./indentify");

const parenthesize = (tokens) => {
  const token = tokens.shift();

  if (isStartParenthesis(token.value)) {
    const expression = [];

    while (!isEndParenthesis(tokens[0].value)) {
      expression.push(parenthesize(tokens));
    }

    tokens.shift();

    return expression;
  }

  return token;
};

const parse = (tokens) => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: "CallExpression",
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

  if (token.type === "Number") {
    return {
      type: "NumericLiteral",
      value: token.value,
    };
  }

  if (token.type === "String") {
    return {
      type: "StringLiteral",
      value: token.value,
    };
  }

  if (token.type === "Name") {
    return {
      type: "Identifier",
      value: token.value,
    };
  }
};

module.exports = { parse: (tokens) => parse(parenthesize(tokens)) };
