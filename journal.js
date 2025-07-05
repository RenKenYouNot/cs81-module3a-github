// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
  // Subtract 2 numbers
} function subtract(num1, num2) {
    return num1 - num2;
  // Multiply 2 numbers
} function multiply (factor1, factor2) {
    return factor1 * factor2;
  // Check if value is positive
} function isPositive(value) {
    return value > 0;
  // Extract first name from string
} function getFirstName(fullName) {
  // Split the full name by space and return the first part
  return fullName.split(' ')[0];
  // Capitalize first letter of word
} function capitalize(word) {
  // Handle empty string case to prevent errors
  if (word.length === 0) {
    return "";
  } // Capitalize the first character and combine with rest of word
  return word.charAt(0).toUpperCase() + word.slice(1);
}
