const dotContainer = document.getElementById("dotContainer");

for (let i = 0; i < 10; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
}
