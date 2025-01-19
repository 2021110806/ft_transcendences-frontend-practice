// main.js

/*
    함수 router
    - 현재 url의 hash값(#home, #login...)을 읽어서 어떤 화면을 보여줄지 결정한다.
*/
function router() {
    const hash = window.location.hash.replace('#', '') || 'home'; 
    // # 기호 제거, 기본값 'home'
  
    const app = document.getElementById('app');
  
    // 간단한 예: hash 값에 따라 분기
    switch (hash) {
      case 'login':
          /*
            hash값이 login일때만 login.js 불러오기. dlgn .then의 경우 import가 성공하면 실행되는 것
            moduel은 login.js에서 내보낸 내용을 담고있음
            module.renderLoginPage()는 login.js의 특정함수를 호출하는 것.

            1번
            module => {
                module.renderLoginPage();
            }

            2번
            .then(function(module) {
                module.renderLoginPage();
            })

            1번과 2번은 같다. c++로 치면 람다함수 같은 느낌.

            .then은 import가 완료되었을때 실행할 함수를 인수로 받는다.
            그래서 저런 꼴로 넘겨줘야하는 것이다. 여기서 중요한점은 함수의 결과값이 아니라
            함수 자체를 넘겨줘야한다는 것. 그래서 간단하게 쓰기위해  => 를 자주 사용한다.

            그렇다면 왜 .then(moduel.function()) 이런식으로 쓰면 안될까? 이건 함수 원형이 아니라
            즉시 실행되는 형식 즉 module의 function의 결과값을 인자로 넘기기 때문에 오류

        */
        import('./login.js')
          .then(module => { 
            module.renderLoginPage();
          })
          .catch(err => console.error(err));
        break;
  
      case 'home':
        import('./home.js')
          .then(module => {
            module.renderHomePage();
          })
          .catch(err => console.error(err));
        break;
  
      default:
        app.innerHTML = `
          <div class="container my-5">
            <h2>404 - Page Not Found</h2>
            <p>해당 페이지가 없습니다.</p>
          </div>
        `;
        break;
    }
  }
  
    /*
        target.addEventListener(event, callbackFunction);
        - target: 이벤트를 감지할 DOM 요소나 객체.
            - 아래에서 target은 window 객체입니다. 이는 브라우저 창을 의미.
        - event: 감지할 이벤트 유형.
            - 예: 'hashchange', 'DOMContentLoaded', 'click', 'scroll', 등.
            - callbackFunction: 이벤트가 발생했을 때 실행할 함수.
            여기서는 router 함수가 이벤트 발생 시 실행됨!
    */

  // 해시가 바뀔 때마다 router() 호출
  window.addEventListener('hashchange', router);
  
  // 페이지 로드 시 한 번 호출
  window.addEventListener('DOMContentLoaded', router);
  