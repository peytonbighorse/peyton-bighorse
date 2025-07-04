const currentSelector = document.querySelector("#currently");
const currentSection = document.querySelector(".current-section");

function displayCurrentSection(event) {
  let currentValue = event.target.value;
  if (currentValue === "listening") {
    currentSection.innerHTML = `<div>
    <a href="https://www.youtube.com/watch?v=_2vRbNehGB0&list=PL77E9683A81CC0BAC" class="current-button" target="_blank">Glassworks - Philip Glass</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_lEfS7J8O3pdEeI2i4uDga-VTc2fstVeR0&si=LG4bnJrpe7ThWvEm" class="current-button" target="_blank">Fine Art - Kneecap</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_kgCX9W9yBVqqJgtPJCbg_9nit_2BUmMBc&si=cN9GR7GsEb4QKFOX" class="current-button" target="_blank">Gumshoe - Samantha Crain</a>
    <a href="https://www.youtube.com/watch?v=9RdQXue6nBw&list=PLZqsyBiYZFQ264yt38YeuS7cBX6oekAuR&pp=0gcJCV8EOCosWNin" class="current-button" target="_blank">Get Disowned - Hop Along</a>
    <a href="https://www.youtube.com/watch?v=qd8hJN9hKGc&list=PL5oWoe4YYZeYzO2EyyEhRjN64jT0VyKHE&pp=0gcJCV8EOCosWNin" class="current-button" target="_blank">Mutt - Kills Across the River</a>
    </div>`;
  }
  if (currentValue === "reading") {
    currentSection.innerHTML = `<div>
    <a href="https://www.goodreads.com/book/show/13629801-the-letters-of-vincent-van-gogh" class="current-button" target="_blank">Reading now: The Letters of Vincent Van Gogh by Mark Roskill</a>
    <a href="https://www.goodreads.com/book/show/202468422-there-are-rivers-in-the-sky?ref=nav_sb_ss_1_21" class="current-button" target="_blank">Also reading now: There Are Rivers in the Sky - Elif Shafak</a>
    <a href="https://www.goodreads.com/book/show/218671843-run-for-the-hills?ref=nav_sb_ss_1_17" class="current-button" target="_blank">Recently finished: Run For The Hills by Kevin Wilson</a>
    <a href="https://www.goodreads.com/book/show/18803640-h-is-for-hawk?ref=nav_sb_ss_1_13" class="current-button" target="_blank">What's next: H Is for Hawk by Helen Macdonald</a>
    <a href="https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow?ref=nav_sb_ss_1_10" class="current-button" target="_blank">My all-time favorite: Tomorrow, Tomorrow, and Tomorrow by Gabrielle Zevin</a>
    <a href="https://www.goodreads.com/book/show/174147294-wandering-stars?ref=nav_sb_ss_1_15" class="current-button" target="_blank">My favorite this year (so far): Wandering Stars by Tommy Orange</a>
    </div>`;
  }
  if (currentValue === "watching") {
    currentSection.innerHTML = `<div>
    <a href="https://letterboxd.com/film/its-not-yet-dark/" class="current-button" target="_blank">Recently finished: It's Not Yet Dark</a>
    <a href="https://letterboxd.com/film/all-about-lily-chou-chou/" class="current-button" target="_blank">What's next: All About Lily Chou-Chou</a>
    <a href="https://letterboxd.com/film/the-banshees-of-inisherin/" class="current-button" target="_blank">Favorite movie: The Banshees of Inisherin</a>
    <a href="https://letterboxd.com/film/nausicaa-of-the-valley-of-the-wind/" class="current-button" target="_blank">Favorite Ghibli: Nausicaä of the Valley of the Wind</a>
    </div>`;
  }
}

currentSelector.addEventListener("change", displayCurrentSection);
