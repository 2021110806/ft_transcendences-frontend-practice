// server.js
const express = require("express");
const path = require("path");

const app = express();

// '/static' 경로 → 실제 "./static" 폴더
app.use("/static", express.static(path.join(__dirname, "static")));

// '/scripts' 경로 → 실제 "./scripts" 폴더
app.use("/scripts", express.static(path.join(__dirname, "scripts")));

// 나머지 경로는 전부 index.html로 (SPA 라우팅)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
