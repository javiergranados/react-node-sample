function checkRegex(str, expression) {
  const regex = new RegExp(expression);
  return regex.test(str);
}

function checkUsername(username) {
  const expression = String.raw`\w+#\d+`;
  return checkRegex(username, expression);
}

function checkPassword(password) {
  const expression = String.raw`\w{8,}`;
  return checkRegex(password, expression);
}

module.exports = {
  checkUsername,
  checkPassword
};
