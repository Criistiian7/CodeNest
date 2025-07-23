const email = "myEmail@email.com";

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return username + domain;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = "*".repeat(username.length - 2);
  return firstChar + maskedMiddle + lastChar + domain;
}

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
