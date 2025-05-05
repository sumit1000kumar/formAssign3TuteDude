// Utility to show messages
function showMessage(message, type) {
  const box = document.getElementById("messageBox");
  box.textContent = message;
  box.className = type;
  box.style.display = "block";
}

// Password toggle
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordField = document.getElementById("password");
  const toggleButton = document.getElementById("togglePassword");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  toggleButton.textContent = type === "password" ? "Show" : "Hide";
});

// Restrict phone input to digits only
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

// Form validation on submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !phone || !password || !confirmPassword) {
    return showMessage("Please fill in all fields.", "error");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return showMessage("Invalid email format.", "error");
  }

  if (!/^\d{10}$/.test(phone)) {
    return showMessage("Phone number must be exactly 10 digits.", "error");
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return showMessage("Password must have at least 6 characters, include uppercase, lowercase, and a number.", "error");
  }

  if (password !== confirmPassword) {
    return showMessage("Passwords do not match.", "error");
  }

  showMessage("Registration successful!", "success");
});

