const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(9002, "0.0.0.0", () => {
  console.log("Listening for requests on port 7000");
});
