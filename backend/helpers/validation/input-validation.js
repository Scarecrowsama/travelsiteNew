const MINIMUM_PASSWORD_LENGTH = 8;
const MINIMUM_NAME_LENGTH = 2;

exports.isEmailValid = function(email) {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

exports.isNameValid = function(name) {
  const valid = new RegExp(/^[a-zA-Z0-9 ]+$/);
  return (valid.test(name) && name.length >= MINIMUM_NAME_LENGTH);
};

exports.isPasswordValid = function(password) {
  //Validate alphanumeric and some special characters
  return password.length >= MINIMUM_PASSWORD_LENGTH;
}

exports.isCountryValid = function(country) {
  //Validate mongoID
  return country.length > MINIMUM_NAME_LENGTH;
}