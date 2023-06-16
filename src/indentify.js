const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ["+", "-", "*", "/", "%"];

const isNumber = (input) => NUMBER.test(input);

const isLetter = (input) => LETTER.test(input);

const isWhitespace = (input) => WHITESPACE.test(input);

const isParenthesis = (input) =>
  isStartParenthesis(input) || isEndParenthesis(input);

const isStartParenthesis = (input) => "(" === input;

const isEndParenthesis = (input) => ")" === input;

const isQuote = (input) => input === '"';

const isOperator = (input) => OPERATORS.includes(input);

module.exports = {
  isNumber,
  isLetter,
  isQuote,
  isWhitespace,
  isParenthesis,
  isStartParenthesis,
  isEndParenthesis,
  isOperator,
};
