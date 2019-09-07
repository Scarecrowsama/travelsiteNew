module.exports = function capitalize(text) {
  if (text.length === 1) {
    return text.toUpperCase();
  }
  return (text.charAt(0).toUpperCase() + text.toLowerCase().substring(1)).replace(/\b\w/g, l => l.toUpperCase());
}