let color = "black"; //default color

//add divs
const body = document.body
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.append(container);

//grid
container.style.width = "650px";
container.style.height = "650px";

function makeGrid(size) {
  let container = document.querySelector("#container")
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++){
    let square = document.createElement("div")
    container.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", inkColor)
    container.appendChild(square).className = "grid-item";
  }
}
makeGrid(16)

//hold mousedown to draw
let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

//color function
function setColor(colorChoice){
  let color = colorChoice;
}

function inkColor(e){
  if (!isMouseDown) return;
  
  if (color == "rainbow"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }else if (color == "white"){
    this.style.backgroundColor = "white"
  }else{
    this.style.backgroundColor = "black"
  }
}

//color buttons
const colorButtons = document.createElement("div");

body.append(colorButtons);
colorButtons.setAttribute("class", "color-btns");

let colorBlack = document.createElement("button");
colorBlack.setAttribute("class", "color-black");
colorBlack.innerHTML = "Black"
colorButtons.appendChild(colorBlack);
colorBlack.addEventListener("click", (e) => {
  color = "black"
});

let colorRainbow = document.createElement("button");
colorRainbow.setAttribute("class", "rainbow");
colorRainbow.innerHTML = "Rainbow"
colorButtons.appendChild(colorRainbow);
colorRainbow.addEventListener("click", (e) => {
  color = "rainbow"
});
let eraser = document.createElement("button");
eraser.setAttribute("class", "eraser");
eraser.innerHTML = "Eraser"
colorButtons.appendChild(eraser);
eraser.addEventListener("click", (e) => {
  color = "white"
});

//grid size buttons
const buttons = document.createElement("div");

body.append(buttons);
buttons.setAttribute("class", "size-btns");

let small = document.createElement("button");
small.setAttribute("class", "sml");
small.innerHTML = "Small";
buttons.appendChild(small);
small.addEventListener("click", () => {
  makeGrid(16)
})

let medium = document.createElement("button");
medium.setAttribute("class", "med");
medium.innerHTML = "Medium";
buttons.appendChild(medium);
medium.addEventListener("click", () => {
  makeGrid(32)
})

let large = document.createElement("button");
large.setAttribute("class", "lg");
large.innerHTML = "Large";
buttons.appendChild(large);
large.addEventListener("click", () => {
  makeGrid(64)
});

//reset button
function restart() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

let reset = document.createElement("button");
reset.setAttribute("class", "reset");
reset.innerHTML = "Reset";
buttons.appendChild(reset);

reset.addEventListener("click", restart);