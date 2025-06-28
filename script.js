const numStars = 150;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = Math.random() * 2 + 1 + "s";
  star.style.opacity = Math.random();
  document.querySelector(".star-layer").appendChild(star);
}
const numStars2 = 150;
for (let i = 0; i < numStars; i++) {
  const star2 = document.createElement("div");
  star2.className = "star-2";
  star2.style.top = Math.random() * 100 + "vh";
  star2.style.left = Math.random() * 100 + "vw";
  star2.style.animationDuration = Math.random() * 2 + 1 + "s";
  star2.style.opacity = Math.random();
  document.querySelector(".star-layer").appendChild(star2);
}
