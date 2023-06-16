const {
  isParenthesis,
  isWhitespace,
  isNumber,
  isLetter,
  isQuote,
} = require("./indentify");

const tokenize = (input) => {
  const tokens = [];

  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({ type: "Parenthesis", value: character });
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({ type: "Number", value: parseInt(number, 10) });
      continue;
    }

    if (isLetter(character)) {
      let symbol = character;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({ type: "Name", value: symbol });
      continue;
    }

    if (isQuote(character)) {
      let symbol = "";

      while (!isQuote(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({ type: "String", value: symbol });

      cursor++;
      continue;
    }

    throw new Error(`${cursor} is not valid`);
  }

  return tokens;
};

module.exports = { tokenize };
