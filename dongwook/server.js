const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 제공 설정 및 디버깅 코드
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    console.log(`Serving File: ${filePath}`); // 요청된 파일 경로 출력

    if (filePath.endsWith('.js')) {
      console.log(`Setting Content-Type: application/javascript`); // MIME 타입 확인
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// 모든 요청 로깅
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`); // 요청된 URL 로그
  next();
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
