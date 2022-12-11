function userPrompt() {
  gridUnits = prompt("Please enter number of Rows/Columns", 16);
  loadGrid(gridUnits);
}

function loadGrid(gridUnits) {
  const doc = document.querySelector(':root');
  const container = document.querySelector("div.container");
  const frag = document.createDocumentFragment();
  
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (gridUnits > 100) {
    gridUnits = 100;
  }
  
  for (var i = 0; i < gridUnits; i++) {
    const div = document.createElement("div");
    div.classList.add('grid-row');
    frag.appendChild(div);
  };
  container.appendChild(frag);

  const gridRows = document.querySelectorAll('.grid-row');
  gridRows.forEach((gridRow) => {
    const frag = document.createDocumentFragment();
    for (var i = 0; i < gridUnits; i++) {
      const div = document.createElement("div");
      div.classList.add('grid-unit');
      frag.appendChild(div);
    };
    gridRow.appendChild(frag);
  });

  const gridSquares = document.querySelectorAll('.grid-unit');
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover',
        () => { gridSquare.classList.add('grid-unit-hover');
    });
  });
};

loadGrid(16);