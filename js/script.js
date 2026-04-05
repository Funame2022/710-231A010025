function sanitizeInput(input) {
  return input.trim().replace(/[&<>\"']/g, "");
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  return minLength && hasUpper && hasLower && hasDigit;
}

window.utils = {
  sanitizeInput,
  debounce,
  isValidEmail,
  isStrongPassword,
};
