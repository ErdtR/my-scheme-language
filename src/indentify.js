const WHITESPACE = /\s+/;

const isWhitespace = (input) => WHITESPACE.test(input);

const isParenthesis = (input) =>
  isStartParenthesis(input) || isEndParenthesis(input);

const isStartParenthesis = (input) => "(" === input;

const isEndParenthesis = (input) => ")" === input;

module.exports = { isWhitespace, isParenthesis };
