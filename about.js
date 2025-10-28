const currentSelector = document.querySelector("#currently");
const currentSection = document.querySelector(".current-section");

function displayCurrentSection(event) {
  let currentValue = event.target.value;
  if (currentValue === "listening") {
    currentSection.innerHTML = `<div>
    <a href="https://www.youtube.com/watch?v=_2vRbNehGB0&list=PL77E9683A81CC0BAC" class="current-button" target="_blank">Glassworks - Philip Glass</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_lEfS7J8O3pdEeI2i4uDga-VTc2fstVeR0&si=LG4bnJrpe7ThWvEm" class="current-button" target="_blank">Fine Art - Kneecap</a>
    <a href="https://youtube.com/playlist?list=OLAK5uy_kgCX9W9yBVqqJgtPJCbg_9nit_2BUmMBc&si=cN9GR7GsEb4QKFOX" class="current-button" target="_blank">Gumshoe - Samantha Crain</a>
    <a href="https://www.youtube.com/watch?v=Oj8KDlsiMo0&list=OLAK5uy_kkSpUjgMtLJnzue_caxn5fLWGN3U_vpqA" class="current-button" target="_blank">Debussy - Quator Trio Danses </a>
    <a href="https://www.youtube.com/watch?v=qd8hJN9hKGc&list=PL5oWoe4YYZeYzO2EyyEhRjN64jT0VyKHE&pp=0gcJCV8EOCosWNin" class="current-button" target="_blank">Mutt - Kills Across the River</a>
    </div>`;
  }
  if (currentValue === "reading") {
    currentSection.innerHTML = `<div>
    <a href="https://www.goodreads.com/book/show/34376766-blood-sweat-and-pixels" class="current-button" target="_blank">Reading now: Blood, Sweat, and Pixels by Jason Schreier</a>
    <a href="https://www.goodreads.com/book/show/202468422-there-are-rivers-in-the-sky?ref=nav_sb_ss_1_21" class="current-button" target="_blank">Recently finished: There Are Rivers in the Sky - Elif Shafak</a>
    <a href="https://www.goodreads.com/book/show/41681.The_Jungle" class="current-button" target="_blank">What's next: The Jungle - Upton Sinclair</a>
    <a href="https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow?ref=nav_sb_ss_1_10" class="current-button" target="_blank">All-time favorite: Tomorrow, Tomorrow, and Tomorrow by Gabrielle Zevin</a>
    <a href="https://www.goodreads.com/book/show/174147294-wandering-stars?ref=nav_sb_ss_1_15" class="current-button" target="_blank">Favorite this year (so far): Wandering Stars by Tommy Orange</a>
    </div>`;
  }
  if (currentValue === "watching") {
    currentSection.innerHTML = `<div>
    <a href="https://letterboxd.com/film/kpop-demon-hunters/" class="current-button" target="_blank">Recently loved: KPop Demon Hunters</a>
    <a href="https://letterboxd.com/film/the-life-of-chuck/" class="current-button" target="_blank">What's next: The Life of Chuck</a>
    <a href="https://letterboxd.com/film/the-banshees-of-inisherin/" class="current-button" target="_blank">Favorite movie: The Banshees of Inisherin</a>
    <a href="https://letterboxd.com/film/one-battle-after-another/" class="current-button" target="_blank">Favorite this year (so far): 
    One Battle After Another</a>
    
    </div>`;
  }
}

currentSelector.addEventListener("change", displayCurrentSection);
