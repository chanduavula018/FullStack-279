const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // for file upload
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// File upload config
const upload = multer({ dest: "uploads/" });

// Route to handle form submission
app.post("/register", upload.single("resume"), (req, res) => {
  console.log("📌 Form Data Received:");
  console.log(req.body);
  console.log("📂 Uploaded File:", req.file);

  res.send("<h2>✅ Registration Successful!</h2>");
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
