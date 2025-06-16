// Import the Express library
const express = require("express");

// Create an Express app
const app = express();

// Port number where your app will run
const PORT = 3000;

// Middleware to parse URL encoded form data
app.use(express.urlencoded({ extended: true }));

// Temporary array to store submitted data
const users = [];

// Serve the HTML file on the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, age } = req.body;

  // Basic server-side validation
  if (!name || name.trim().length < 3) {
    return res.status(400).send("Name should be at least 3 characters long.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return res.status(400).send("Please enter a valid email address.");
  }

  const ageNum = Number(age);
  if (!ageNum || ageNum < 1 || ageNum > 120) {
    return res.status(400).send("Age must be a number between 1 and 120.");
  }

  // Store the valid user info temporarily
  users.push({ name: name.trim(), email: email.trim(), age: ageNum });

  // Send confirmation back to user
  res.send(`
    <h1>Thanks for registering, ${name}!</h1>
    <p>We've saved your information:</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Age:</strong> ${ageNum}</li>
    </ul>
    <a href="/">Go back to form</a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
