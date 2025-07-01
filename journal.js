// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
} function subtract(num1, num2) {
    return num1 - num2;
} function multiply (factor1, factor2) {
    return factor1 * factor2;
} function isPositive(value) {
    return value > 0;
} function getFirstName(fullName) {
  return fullName.split(' ')[0];
} function capitalize(word) {
  if (word.length === 0) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}
