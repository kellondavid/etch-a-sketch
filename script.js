let color = "black"; //default color

//add divs
const body = document.body
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.append(container);
    const allBtns = document.createElement("div");
    allBtns.setAttribute("class", "all-btns");
    body.append(allBtns)

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
let isMouseDown = false;
document.body.onmousedown = (e) => {
  isMouseDown = true;
  e.preventDefault();
};
document.body.onmouseup = (e) => (isMouseDown = false);

//color function
function setColor(colorChoice){
  let color = colorChoice;
}

function inkColor(e){
  if (e.type === 'mouseover' && !isMouseDown) return;
  
  if (color == "rainbow"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }else if (color == "#fac9b8"){
    this.style.backgroundColor = "#fac9b8"
  }else if (color == "black"){
    this.style.backgroundColor = "black"
  }else{
    this.style.backgroundColor = `${color}`;
  }
}

//color buttons
const colorButtons = document.createElement("div");

allBtns.append(colorButtons)
colorButtons.setAttribute("class", "color-btns");

let hColor = document.createElement("h2");
colorTxt = document.createTextNode("Grid Color");
hColor.setAttribute("class", "color-txt");
hColor.appendChild(colorTxt);
colorButtons.appendChild(hColor);

let colorWheel = document.createElement("input");
colorWheel.setAttribute("type", "color");
colorWheel.setAttribute("class", "wheel");
colorButtons.appendChild(colorWheel);
colorWheel.addEventListener("input", () => {
  color = colorWheel.value;
})

let colorBlack = document.createElement("button");
colorBlack.setAttribute("class", "color-black btn btn-outline-dark btn-lg download-button");
colorBlack.innerHTML = "Black"
colorButtons.appendChild(colorBlack);
colorBlack.addEventListener("click", (e) => {
  color = "black"
});

let colorRainbow = document.createElement("button");
colorRainbow.setAttribute("class", "rainbow btn btn-outline-info btn-lg download-button");
colorRainbow.innerHTML = "Rainbow"
colorButtons.appendChild(colorRainbow);
colorRainbow.addEventListener("click", (e) => {
  color = "rainbow"
});
let eraser = document.createElement("button");
eraser.setAttribute("class", "eraser btn btn-outline-light btn-lg download-button");
eraser.innerHTML = "Eraser"
colorButtons.appendChild(eraser);
eraser.addEventListener("click", (e) => {
  color = "#fac9b8"
});

//grid size buttons
const buttons = document.createElement("div");

allBtns.append(buttons);
buttons.setAttribute("class", "size-btns");

let hSize = document.createElement("h2");
sizeTxt = document.createTextNode("Grid Size");
hSize.setAttribute("class", "size-txt");
hSize.appendChild(sizeTxt);
buttons.appendChild(hSize);


let small = document.createElement("button");
small.setAttribute("class", "sml btn btn-dark btn-lg download-button");
small.innerHTML = "Small";
buttons.appendChild(small);
small.addEventListener("click", () => {
  makeGrid(16)
})

let medium = document.createElement("button");
medium.setAttribute("class", "med btn btn btn-dark btn-lg download-button");
medium.innerHTML = "Medium";
buttons.appendChild(medium);
medium.addEventListener("click", () => {
  makeGrid(32)
})

let large = document.createElement("button");
large.setAttribute("class", "lg btn btn btn-dark btn-lg download-button");
large.innerHTML = "Large";
buttons.appendChild(large);
large.addEventListener("click", () => {
  makeGrid(64)
});

//reset button
function restart() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fac9b8";
  });
}

let reset = document.createElement("button");
reset.setAttribute("class", "reset btn btn btn-danger btn-lg download-button");
reset.innerHTML = "Reset";
buttons.appendChild(reset);
reset.addEventListener("click", restart);

