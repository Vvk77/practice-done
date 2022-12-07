const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const colorChange = (colour) => {
  outputEl.innerText = inputEl.value;

  outputEl.style.color =
    colour === red ? "yellow" : colour === green ? "green" : "blue";
};

red.addEventListener("click", () => colorChange(red) );
green.addEventListener("click", () => colorChange(green) );
blue.addEventListener("click", () => colorChange(blue) );