const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 서빙 (주: 이미 작성되어 있는 코드일 것입니다)
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    console.log(`Serving File: ${filePath}`);
    if (filePath.endsWith('.js')) {
      console.log(`Setting Content-Type: application/javascript`);
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// 모든 요청 로깅(이미 있는 미들웨어)
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// ★★★ 폴백 라우팅 추가: 
// /profile, /gameplay 등의 직접 접근(새로고침 포함) 시에도 항상 index.html을 반환.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
