module.exports = function upperFirstLetter(text) {
  if (text.length === 1) {
    return text.toUpperCase();
  }
  return text.charAt(0).toUpperCase() + text.substring(1);
}