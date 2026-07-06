const currentSelector = document.querySelector("#currently");
const currentSection = document.querySelector(".current-section");

function displayCurrentSection(event) {
  let currentValue = event.target.value;
  if (currentValue === "listening") {
    currentSection.innerHTML = `<div>
    <a href="https://www.youtube.com/watch?v=_2vRbNehGB0&list=PL77E9683A81CC0BAC" class="current-button" target="_blank">Glassworks - Philip Glass</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_lEfS7J8O3pdEeI2i4uDga-VTc2fstVeR0&si=LG4bnJrpe7ThWvEm" class="current-button" target="_blank">Fine Art - Kneecap</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_kgCX9W9yBVqqJgtPJCbg_9nit_2BUmMBc&si=cN9GR7GsEb4QKFOX" class="current-button" target="_blank">Gumshoe - Samantha Crain</a>
    <a href="https://www.youtube.com/playlist?list=PL19tNGcR533-wU5YcNyEWVPq9d5zjGo7-" class="current-button" target="_blank">The Blue Trees - Gorky's Zygotic Mynci </a>
    <a href="https://www.youtube.com/watch?v=qd8hJN9hKGc&list=PL5oWoe4YYZeYzO2EyyEhRjN64jT0VyKHE&pp=0gcJCV8EOCosWNin" class="current-button" target="_blank">Mutt - Kills Across the River</a>
    <a href="https://www.youtube.com/playlist?list=OLAK5uy_m4g1sRMn8VOHpfif0z2DhkGZIzR-cNtAc" class="current-button" target="_blank">KPop Demon Hunters Soundtrack</a>
    <a href="https://www.youtube.com/playlist?list=PL-IZnvVJ8vo2Ox3-ztiVPdA_So26GCTRz" class="current-button" target="_blank">Manning Fireworks - MJ Lenderman</a>
    </div>`;
  }
  if (currentValue === "reading") {
    currentSection.innerHTML = `<div>
    <a href="https://www.goodreads.com/en/book/show/214152261-flesh" class="current-button" target="_blank">Reading now: Flesh - David Szalay</a>
    <a href="https://www.goodreads.com/book/show/37800111-the-last-children-of-tokyo?from_search=true&from_srp=true&qid=kc1TlB9uvs&rank=2" class="current-button" target="_blank">Recently finished: The Emmisary - Yoko Tawada</a>
    <a href="https://www.goodreads.com/book/show/62919375-shark-heart?ref=nav_sb_ss_1_11" class="current-button" target="_blank">What's next: Shark Heart - Emily Habeck</a>
    <a href="https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow?ref=nav_sb_ss_1_10" class="current-button" target="_blank">All-time favorite: Tomorrow, Tomorrow, and Tomorrow by Gabrielle Zevin</a>
    <a href="https://www.goodreads.com/book/show/25242224-the-story-of-the-lost-child?ref=nav_sb_ss_1_23" class="current-button" target="_blank">Recently loved: The Story of a Lost Child - Elena Ferrante</a>`
      ;
  }
  if (currentValue === "watching") {
    currentSection.innerHTML = `<div>
    <a href="https://ebird.org/species/pitwhy" class="current-button" target="_blank">Recently loved: Pin-tailed Wydah</a>
    <a href="https://ebird.org/species/verfly" class="current-button" target="_blank">Looking for: Vermillion Flycatcher</a>
    <a href="https://ebird.org/species/stejay/" class="current-button" target="_blank">My #1 Favorite: Steller's Jay</a>
    <a href="https://ebird.org/species/grbher3/" class="current-button" target="_blank">Georgie's Favorite: 
    Great Blue Heron</a>
    <a href="https://ebird.org/species/phaino" class="current-button" target="_blank">Favorite of the Year (so far): 
    Phainopepla</a>
    </div>`;
  }
}

currentSelector.addEventListener("change", displayCurrentSection);
