function getGamePlayersPage() {
    return `
        <div class="container" style="max-width: 600px; margin-top: 50px;">
            <h2 class="mb-4">Player List</h2>
            <div id="playerList">
                ${Array.from({ length: 8 }, (_, i) => `
                    <div class="mb-3">
                        <label class="form-label">User ${i + 1}</label>
                        <div class="d-flex align-items-center gap-2">
                            <input type="text" class="form-control username-input" placeholder="username" oninput="validateInputs()">
                            <span class="validation-icon"></span>
                        </div>
                        <div class="error-text text-danger" style="font-size: 12px;"></div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-3 text-start">
                <button id="nextBtn" class="btn btn-primary" disabled>Next</button>
            </div>
        </div>

        <script>
            function validateInputs() {
                const inputs = document.querySelectorAll(".username-input");
                let allValid = true;

                inputs.forEach(input => {
                    const username = input.value.trim();
                    const icon = input.nextElementSibling;
                    const errorText = input.parentElement.nextElementSibling;

                    if (/^[a-zA-Z0-9_]{3,12}$/.test(username)) {
                        icon.textContent = "✅";
                        errorText.textContent = "";
                    } else if (username.length > 0) {
                        icon.textContent = "❌";
                        errorText.textContent = "username rule: 3~12 letters, no special chars";
                        allValid = false;
                    } else {
                        icon.textContent = "";
                        errorText.textContent = "";
                        allValid = false;
                    }
                });

                document.getElementById("nextBtn").disabled = !allValid;
            }
        </script>
    `;
}

function setupGamePlayersEvents() {
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      navigateTo("/game/players/tournamant");
    })
  }
}

export { getGamePlayersPage, setupGamePlayersEvents };
