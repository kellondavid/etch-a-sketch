// add divs
const body = document.body
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.append(container);
        // let grid = document.createElement("div");
        // grid.setAttribute("id", "grid");
        // container.append(grid);


// grid
function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = container.appendChild(document.createElement('div'));
      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
        //click to draw
        square.addEventListener("mouseover", blackInk)
      }
    }
  }
  
  createBoxes(16);

// click to draw function
function blackInk () {
    this.style.backgroundColor = "black"
}

//buttons
const buttons = document.createElement("div");
container.append(buttons);
let small = document.createElement("button");
small.innerHTML = "Small";
buttons.appendChild(small);

let medium = document.createElement("button");
buttons.appendChild(medium);
medium.innerHTML = "Medium";

let large = document.createElement("button");
large.innerHTML = "Large";
buttons.appendChild(large);