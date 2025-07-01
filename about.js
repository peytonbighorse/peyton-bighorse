const currentSelector = document.querySelector("#currently");
const currentSection = document.querySelector(".current-section");

function displayCurrentSection(event) {
  let currentValue = event.target.value;
  if (currentValue === "listening") {
    currentSection.innerHTML = `<div>
    <a href="#" class="current-button">Glassworks - Philip Glass</a>
    <a href="#" class="current-button">Fine Art - Kneecap</a>
    <a href="#" class="current-button">Gumshoe - Samantha Crain</a>
    <a href="#" class="current-button">Pod Save the World</a>
    <a href="#" class="current-button">Name of the Wind - Patrick Rothfuss</a>
    </div>`;
  }
  if (currentValue === "reading") {
    currentSection.innerHTML = `<div>
    <a href="#" class="current-button">Reading now: The Letters of Vincent Van Gogh by Mark Roskill</a>
    <a href="#" class="current-button">Recently finished: Run For The Hills by Kevin Wilson</a>
    <a href="#" class="current-button">What's next: </a>
    <a href="#" class="current-button">My favorite:</a>
    </div>`;
  }
  if (currentValue === "watching") {
    currentSection.innerHTML = `<div>
    <a href="#" class="current-button">Recently finished: It's Not Yet Dark</a>
    <a href="#" class="current-button">What's next: All About Lily Chou-Chou</a>
    <a href="#" class="current-button">My favorite: The Banshees of Inisherin</a>
    </div>`;
  }
}

currentSelector.addEventListener("change", displayCurrentSection);
