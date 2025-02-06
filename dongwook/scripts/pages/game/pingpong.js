// const config = JSON.stringify({
//     winningScore: 7,          // 승리 점수 (생략해도 기본값 7)
//     ballSpeed: 100,           // 공속도 약간 빠르게
//     paddleSize: { width: 10, height: 10, depth: 1 },  // 패들 높이 증가
//     mapSkin: "#003366",       // 맵 배경색 (16진수 문자열도 사용 가능)
//     obstacleCount: 3          // 장애물 3개 생성
// });

export function getPingPongGamePage(configJson) {
    const container = document.createElement("div");
    container.className = "game-container";
    container.innerHTML = `
        <style>
            .game-container { 
                margin-top: 60px;
                width: 600px; 
                height: 600px; 
                position: relative;
            }
            #scoreBoard {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                font-family: Arial, sans-serif;
                font-size: 24px;
                z-index: 10;
            }
            #gameContainer {
                width: 600px; 
                height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            canvas { display: block; }
            /* 승리 메시지 스타일 */
            #winnerMessage {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: yellow;
                font-family: Arial, sans-serif;
                font-size: 36px;
                z-index: 20;
                display: none;
            }
        </style>
        <div id="scoreBoard">Player1: 0 | Player2: 0</div>
        <div id="gameContainer"></div>
        <div id="winnerMessage"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    `;

    // DOM이 완전히 로드된 후에 게임 초기화 (옵션을 함께 전달)
    setTimeout(() => {
        initializePingPongGame(configJson);
    }, 100);

    return container;
}

function initializePingPongGame(configJson) {
    // 기본 옵션 설정
    const defaultConfig = {
        winningScore: 7,              // 승리 점수 (7점 내기)
        ballSpeed: 0.6,               // 공의 기본 속도
        paddleSpeed: 0.5,             // 패들 이동 속도
        paddleSize: { width: 0.5, height: 4, depth: 1 },  // 패들 크기
        boundaryY: 10,                // 상하 경계
        mapSkin: 0x001133,            // 맵 배경색 (16진수)
        obstacleCount: 2              // 생성할 장애물 개수 (0이면 생성 안 함)
    };

    // 옵션 병합 (JSON 문자열일 수도 있으므로 파싱)
    let config = { ...defaultConfig };
    if (configJson) {
        try {
            const parsed = typeof configJson === 'string' ? JSON.parse(configJson) : configJson;
            config = { ...config, ...parsed };
        } catch (e) {
            console.error("Invalid config JSON, using default config", e);
        }
    }

    // Three.js 기본 설정
    const container = document.getElementById('gameContainer');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(config.mapSkin);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 600, false);
    container.appendChild(renderer.domElement);

    // 재질 설정
    const paddleMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const ballMaterial = new THREE.MeshPhongMaterial({ color: 0xffdd00 });
    const obstacleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xaaaaaa);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // 패들 생성 (옵션에 따른 크기 적용)
    const leftPaddle = new THREE.Mesh(
        new THREE.BoxGeometry(config.paddleSize.width, config.paddleSize.height, config.paddleSize.depth),
        paddleMaterial
    );
    leftPaddle.position.set(-12, 0, 0);
    scene.add(leftPaddle);

    const rightPaddle = new THREE.Mesh(
        new THREE.BoxGeometry(config.paddleSize.width, config.paddleSize.height, config.paddleSize.depth),
        paddleMaterial
    );
    rightPaddle.position.set(12, 0, 0);
    scene.add(rightPaddle);

    // 공 생성 (기본 공속도 적용)
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), ballMaterial);
    ball.position.set(0, 0, 0);
    scene.add(ball);
    const ballVelocity = new THREE.Vector3(config.ballSpeed, config.ballSpeed, 0);

    const keysPressed = {};
    window.addEventListener('keydown', (e) => { keysPressed[e.key] = true; });
    window.addEventListener('keyup', (e) => { keysPressed[e.key] = false; });

    let gameScore = { player1: 0, player2: 0 };
    let gameOver = false;
    const obstacles = [];

    // 장애물 생성 (옵션에 따른 갯수)
    for (let i = 0; i < config.obstacleCount; i++) {
        const obstacle = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), obstacleMaterial);
        // 패들과 너무 가까이 있지 않도록 적당한 위치에 랜덤 생성 (필요에 따라 위치 조정)
        obstacle.position.set(
            (Math.random() * 20) - 10, 
            (Math.random() * (config.boundaryY * 2 - 2)) - (config.boundaryY - 1), 
            0
        );
        scene.add(obstacle);
        obstacles.push(obstacle);
    }

    // 게임 업데이트 함수
    function update() {
        if (gameOver) return;

        // 패들 이동 (W,S: 왼쪽, I,K: 오른쪽)
        if (keysPressed['w'] && leftPaddle.position.y < config.boundaryY - config.paddleSize.height / 2) {
            leftPaddle.position.y += config.paddleSpeed;
        }
        if (keysPressed['s'] && leftPaddle.position.y > -config.boundaryY + config.paddleSize.height / 2) {
            leftPaddle.position.y -= config.paddleSpeed;
        }
        if (keysPressed['i'] && rightPaddle.position.y < config.boundaryY - config.paddleSize.height / 2) {
            rightPaddle.position.y += config.paddleSpeed;
        }
        if (keysPressed['k'] && rightPaddle.position.y > -config.boundaryY + config.paddleSize.height / 2) {
            rightPaddle.position.y -= config.paddleSpeed;
        }

        // 공 이동
        ball.position.add(ballVelocity);

        // 상하 경계 충돌 처리
        if (ball.position.y + 0.5 > config.boundaryY || ball.position.y - 0.5 < -config.boundaryY) {
            ballVelocity.y = -ballVelocity.y;
        }

        // 좌우 경계 도달 시 점수 처리
        if (ball.position.x - 0.5 < -13) {
            // 오른쪽 플레이어 점수 획득
            gameScore.player2 += 1;
            if (gameScore.player2 >= config.winningScore) {
                endGame("Player 2 Wins!");
                return;
            }
            resetBall(1);
        } else if (ball.position.x + 0.5 > 13) {
            // 왼쪽 플레이어 점수 획득
            gameScore.player1 += 1;
            if (gameScore.player1 >= config.winningScore) {
                endGame("Player 1 Wins!");
                return;
            }
            resetBall(-1);
        }

        // 패들과 공의 충돌 처리 (단순 충돌 판정)
        if (
            ball.position.x - 0.5 < leftPaddle.position.x + config.paddleSize.width / 2 &&
            Math.abs(ball.position.y - leftPaddle.position.y) < config.paddleSize.height / 2 + 0.5
        ) {
            ballVelocity.x = Math.abs(ballVelocity.x);
        }
        if (
            ball.position.x + 0.5 > rightPaddle.position.x - config.paddleSize.width / 2 &&
            Math.abs(ball.position.y - rightPaddle.position.y) < config.paddleSize.height / 2 + 0.5
        ) {
            ballVelocity.x = -Math.abs(ballVelocity.x);
        }

        // 장애물과의 충돌 처리 (간단한 박스 충돌 판정)
        obstacles.forEach(obstacle => {
            const ballBox = new THREE.Box3().setFromObject(ball);
            const obstacleBox = new THREE.Box3().setFromObject(obstacle);
            if (ballBox.intersectsBox(obstacleBox)) {
                // 충돌 시 공의 속도 반전 (필요에 따라 좀 더 정교하게 처리 가능)
                ballVelocity.x = -ballVelocity.x;
                ballVelocity.y = -ballVelocity.y;
            }
        });

        // 점수판 업데이트
        document.getElementById('scoreBoard').innerText = `Player1: ${gameScore.player1} | Player2: ${gameScore.player2}`;
    }

    // 공 리셋 함수 (점수가 날 때마다 호출)
    function resetBall(direction) {
        ball.position.set(0, 0, 0);
        ballVelocity.set(
            config.ballSpeed * direction,
            config.ballSpeed * (Math.random() * 0.5 - 0.25),
            0
        );
    }

    // 게임 종료 함수 (승리 메시지 표시)
    function endGame(message) {
        gameOver = true;
        const winnerMessage = document.getElementById('winnerMessage');
        // 메시지와 함께 버튼을 추가
        winnerMessage.innerHTML = `
          <div>${message}</div>
          <button id="exitButton" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">Go to Menu</button>
        `;
        winnerMessage.style.display = 'block';
        
        // 버튼 클릭 시 다른 페이지로 이동 (SPA 라우터 사용 시 navigateTo 함수 호출)
        document.getElementById('exitButton').addEventListener('click', () => {
          // 만약 SPA 라우터가 window.navigateTo 함수를 제공한다면:
          if (typeof window.navigateTo === 'function') {
            window.navigateTo('/'); // 예: 홈으로 이동
          } else {
            // 또는 location.href를 이용해서 이동
            window.location.href = '/';
          }
        });
      }
      

    // 애니메이션 루프
    function animate() {
        if (!gameOver) {
            requestAnimationFrame(animate);
        }
        update();
        renderer.render(scene, camera);
    }
    animate();
}

// document.body.appendChild(getPingPongGamePage(config));