export function renderGameOption(content) {
    content.innerHTML = `
      <h2 class="text-center mb-4">Game Option</h2>
      <div class="mb-3">
        <label class="form-label">Players</label>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary">2</button>
          <button class="btn btn-secondary">4</button>
          <button class="btn btn-secondary">8</button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Paddle Size</label>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary">x1</button>
          <button class="btn btn-secondary">x1.25</button>
          <button class="btn btn-secondary">x1.5</button>
          <button class="btn btn-secondary">x1.75</button>
          <button class="btn btn-secondary">x2.0</button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Ball Speed</label>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary">x1</button>
          <button class="btn btn-secondary">x1.25</button>
          <button class="btn btn-secondary">x1.5</button>
          <button class="btn btn-secondary">x1.75</button>
          <button class="btn btn-secondary">x2.0</button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Obstacles Number</label>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary">1</button>
          <button class="btn btn-secondary">2</button>
          <button class="btn btn-secondary">3</button>
          <button class="btn btn-secondary">4</button>
          <button class="btn btn-secondary">5</button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Background Theme</label>
        <div class="d-flex justify-content-between">
          <img src="static/theme1.png" alt="Placeholder" class="img-thumbnail">
          <img src="static/theme2.png" alt="Placeholder" class="img-thumbnail">
          <img src="static/theme3.png" alt="Placeholder" class="img-thumbnail">
          <img src="static/theme4.png" alt="Placeholder" class="img-thumbnail">
        </div>
      </div>
      <button class="btn btn-primary w-100">Next</button>
    `;
  }
  