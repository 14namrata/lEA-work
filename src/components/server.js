const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Allow frontend to access this API
app.use(cors());

// Example contact data (you can replace this with DB later)
const contactInfo = {
  email: "support@ramsportal.com",
  address: "CE PWD, Fatasil Ambari, Guwahati, Assam 781025"
};

// API endpoint to get contact details
app.get("/api/contact", (req, res) => {
  res.json(contactInfo);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
