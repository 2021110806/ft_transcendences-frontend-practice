const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ 정적 파일 제공 경로 설정 (MIME 타입 명시적 설정)
app.use('/scripts', express.static(path.join(__dirname, 'scripts'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.use('/style', express.static(path.join(__dirname, 'scripts/style'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.use('/static', express.static(path.join(__dirname, 'static')));

// ✅ SPA 라우팅 설정 (항상 마지막에 위치)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
