const board = document.querySelector("#board");
const colors = [
  "#b92b27",
  "#f12711",
  "#fffc00",
  "#1e9600",
  "#2193b0",
  "#1565c0",
  "#ff0099",
];
const SQUARES_NUM = 756;

for (let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = randomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
}

function randomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
