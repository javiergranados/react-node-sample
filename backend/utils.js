function checkRegex(str, expression) {
  const regex = new RegExp(expression);
  return regex.test(str);
}

function checkUsername(username) {
  const expression = String.raw`/\w+#\d+/g`;
  return checkRegex(username, expression);
}

function checkPassword(password) {
  const expression = String.raw`/\w{8,}/g`;
  return checkRegex(password, expression);
}

module.exports = {
  checkUsername,
  checkPassword
};
