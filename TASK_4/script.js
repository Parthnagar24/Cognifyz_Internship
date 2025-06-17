const form = document.getElementById("registrationForm");
const resultSection = document.getElementById("result-section");
const formSection = document.getElementById("form-section");
const message = document.getElementById("user-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Simple validation logic
  if (!isValidPassword(password)) {
    alert("Password must be at least 8 characters long and include a number.");
    return;
  }

  // Update DOM dynamically
  message.innerText = `Welcome, ${username}! A confirmation has been sent to ${email}.`;

  // Simulate routing
  formSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
});

function isValidPassword(pw) {
  return pw.length >= 8 && /\d/.test(pw);
}

function goBack() {
  formSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  form.reset();
}
