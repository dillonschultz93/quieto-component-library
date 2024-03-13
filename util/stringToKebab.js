// Convert the string to kebab-case
// Example: 'HelloWorld' -> 'hello-world'

export default function stringToKebab(str) {
  // Check if the string is empty or not a string
  if (!str || typeof str !== 'string') {
    return '';
  }
  // Replace all non-word characters with a hyphen
  return str.replace(/\W/g, '-').toLowerCase();
}
