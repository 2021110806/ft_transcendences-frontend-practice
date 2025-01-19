## 작동 과정

### 1. npm start
- package.json의 scripts에 정의 된 "start": "node server.js" 실행
- server.js가 Node.js 환경에서 실행 됨

### 2. 서버 시작
- express 서버가 3000 포트로 시작
- 모든 경로에 대해 index.html 반환 (app.get('*))

### 3. 초기 페이지 로드 (index.html)
- 부트스트랩 리소스 및 style.css 로드
- 네비게이션 바 설정(전역, 어느 페이지에서든 보임)
- app.js 스크립트 로드

### 4. app.js (엔트리 포인트) 실행
- DOMContentLoaded 이벤트는 HTML 문서가 완전히 로드되고 파싱되었을 때 발생
- index.html이 로드 되었음을 보장 -> router() 함수 실행하여 적절한 페이지 렌더링링

### 5. router.js
- 현재 경로에 해당하는 컴포넌트 설정, 기본은 HomePage


## Vanilla JS DOM Manipulation

### DOM이란?
- DOM(Document Object Model)은 HTML 문서를 프로그래밍적으로 조작할 수 있는 인터페이스

- 구조는 아래와 같이 트리 형태라고 말함.
```
<div id="parent">              <!-- 부모 요소 -->
    <p>첫 번째 문단</p>        <!-- 자식 요소 -->
    <span>텍스트</span>        <!-- 자식 요소 -->
    <button>클릭</button>      <!-- 자식 요소 -->
</div>
```

### DOM의 주요 조작 메소드
- 요소 생성 및 수정
```
// createElement(tagName): 새로운 HTML 요소 생성
const div = document.createElement('div');  // <div></div>

// innerHTML: HTML 문자열을 사용해 요소의 내용을 설정
element.innerHTML = '<span>새로운 내용</span>';

// textContent: 텍스트 내용만 설정 (HTML 태그가 이스케이프됨)
element.textContent = '<span>텍스트</span>';  // 문자 그대로 표시

// setAttribute(name, value): 속성 설정
element.setAttribute('class', 'my-class');

// 또는 직접 속성 접근
element.className = 'my-class';
element.id = 'my-id';
```

- 요소 추가 및 삭제
```
// appendChild(node): 자식 요소 끝에 추가
parent.appendChild(child);

// prepend(node): 자식 요소 시작에 추가
parent.prepend(child);

// insertBefore(newNode, referenceNode): 특정 요소 앞에 추가
parent.insertBefore(newNode, referenceNode);

// removeChild(node): 자식 요소 제거
parent.removeChild(child);

// remove(): 요소 자체를 제거
element.remove();
```

- 요소 생성 및 추가/삭제를 활용한 예시 코드
```
// 부모 div 생성
const parent = document.createElement('div');
parent.className = 'parent';

// 자식 요소들 생성
const firstChild = document.createElement('p');
firstChild.textContent = '첫 번째 자식';

const secondChild = document.createElement('p');
secondChild.textContent = '두 번째 자식';

const newChild = document.createElement('p');
newChild.textContent = '새로운 자식';

// appendChild: 자식을 끝에 추가
parent.appendChild(firstChild);
parent.appendChild(secondChild);
// 결과:
// <div class="parent">
//   <p>첫 번째 자식</p>
//   <p>두 번째 자식</p>
// </div>

// prepend: 자식을 맨 앞에 추가
parent.prepend(newChild);
// 결과:
// <div class="parent">
//   <p>새로운 자식</p>
//   <p>첫 번째 자식</p>
//   <p>두 번째 자식</p>
// </div>

// insertBefore: 특정 요소(secondChild) 앞에 삽입
const anotherChild = document.createElement('p');
anotherChild.textContent = '중간에 넣을 자식';
parent.insertBefore(anotherChild, secondChild);
// 결과:
// <div class="parent">
//   <p>새로운 자식</p>
//   <p>첫 번째 자식</p>
//   <p>중간에 넣을 자식</p>
//   <p>두 번째 자식</p>
// </div>

// removeChild: 특정 자식 제거
parent.removeChild(firstChild);
// 결과:
// <div class="parent">
//   <p>새로운 자식</p>
//   <p>중간에 넣을 자식</p>
//   <p>두 번째 자식</p>
// </div>

// remove: 요소 자체를 제거
secondChild.remove();  // 부모 요소 참조 없이 직접 제거 가능
// 결과:
// <div class="parent">
//   <p>새로운 자식</p>
//   <p>중간에 넣을 자식</p>
// </div>
```

- 클래스 조작
```
```

- 스타일 조작
```
```

- 이벤트 조작
```
```