// Convert a string to PascalCase
// Example: 'hello world' -> 'HelloWorld'

export default function stringToPascal(str) {
  // Check if the string is empty or not a string
  if (!str || typeof str !== 'string') {
    return '';
  }
  // Replace all non-word characters and split the string into an array of words
  const words = str.replace(/\W/g, ' ').split(/\s+/);
  // Capitalize the first letter of each word and join them together
  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
