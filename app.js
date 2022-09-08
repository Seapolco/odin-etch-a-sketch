

let header = document.querySelector('.header');
let container = document.querySelector('.container');
let button = document.querySelector('.userInput');
let body = document.querySelector('body');

let usersGrid = 32;
let numOfSquares = usersGrid * usersGrid;


console.log(body)

// let usersGrid = parseInt(prompt('Number of columns/rows?'));



function deleteGrid() {
  return  usersGrid = 0;
}

function randomColor() {
	let random1 = Math.floor(Math.random() * 255) + 1
  	let random2 = Math.floor(Math.random() * 255) + 1
    let random3 = Math.floor(Math.random() * 255) + 1
    let red,green,blue;
  
  return `rgb(${random1},${random2},${random3})`
  
  
}

function addHover() {

    let squareDiv = document.querySelectorAll('.square');

    squareDiv.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      // console.log(e)
      e.target.style.backgroundColor = `green`;
    //   e.target.style.backgroundColor = `${randomColor()}`;
   })
  })
}



// console.log(usersGrid)



// console.log(numOfSquares)





// Populate the container with a 16x16 grid of squares (divs);
// for(let i = 0; i < numOfSquares; i++) {
//     let square = document.createElement('div');
//     // let divContent = document.createTextNode('');
//     square.classList.add('square');
//     // div.appendChild(divContent);
//     container.insertAdjacentElement('beforeend', square); 
// }


// Create "hover" event listener



// console.log(squareDiv)



            

    // function changeHeader(...header) {
    //     return header[0].textContent = 'Loooool';
    // } 

// changeHeader(header);


function generateGrid() {

    container.replaceChildren();
    

    for(let i = 0; i < numOfSquares; i++) {
            
            let square = document.createElement('div');
            // let divContent = document.createTextNode('');
            square.classList.add('square');
            // div.appendChild(divContent);
            container.insertAdjacentElement('beforeend', square); 
            // container.classList.add('container');
            
            console.log(`forloop${numOfSquares}`)
        }
    
    
    // container.parentNode.replaceChild(newContainer, container)
    addHover();
}

31


generateGrid();




container.style.display = 'grid';
container.style.justifyContent = 'center';
container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
container.style.gridTemplateRows = `repeat(${usersGrid},1fr)`;
container.style.width = '500px';
container.style.height = '500px';

// newContainer.style.display = 'grid';
// newContainer.style.justifyContent = 'center';
// newContainer.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
// newContainer.style.width = '600px';
// newContainer.style.height = '600px';



button.addEventListener('click', () => {
    usersGrid = parseInt(prompt('How many squares?'));
    if(usersGrid > 100) {
        usersGrid = 100;
    }
    numOfSquares = usersGrid * usersGrid;
    console.log(`usersGrid${usersGrid}`)
    container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
    container.style.gridTemplateRows = `repeat(${usersGrid},1fr)`;
    container.style.display = 'grid';
    container.style.justifyContent = 'center';
    container.style.width = '500px';
    container.style.height = '500px';
    generateGrid();
    
});







// button.addEventListener('click', () => {
//     let number = prompt('hewrooo??!');
//     usersGrid = number;
// })




// display: grid;
// justify-content: center;
// grid-template-columns: repeat(16,1fr);
// width: 600px;
// height: 600px;


// squareDiv.forEach(square => {
//     square.addEventListener('mouseleave', (e) => {
//       // console.log(e)
//       e.target.style.backgroundColor = 'black';
//    })
   
// })


