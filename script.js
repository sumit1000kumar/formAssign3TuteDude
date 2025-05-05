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

// Form validation on submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  // Basic validation
  if (!name || !email || !phone || !password) {
    return showMessage("Please fill in all fields.", "error");
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return showMessage("Invalid email format.", "error");
  }

  // Phone number validation
  if (!/^\d{10}$/.test(phone)) {
    return showMessage("Phone number must be exactly 10 digits.", "error");
  }

  // Password strength check
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return showMessage("Password must have at least 6 characters, include uppercase, lowercase, and a number.", "error");
  }

  showMessage("Registration successful!", "success");
});
