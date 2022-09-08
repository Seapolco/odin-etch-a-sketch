

let header = document.querySelector('.header');
let container = document.querySelector('.container');
let button = document.querySelector('.userInput');

// let usersGrid = parseInt(prompt('Number of columns/rows?'));


let usersGrid = 16;
let numOfSquares = usersGrid * usersGrid;



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

  
    

    for(let i = 0; i < numOfSquares; i++) {
            let square = document.createElement('div');
            // let divContent = document.createTextNode('');
            square.classList.add('square');
            // div.appendChild(divContent);
            container.insertAdjacentElement('beforeend', square); 
        }
        
}



generateGrid();


let squareDiv = document.querySelectorAll('.square');

squareDiv.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      // console.log(e)
      e.target.style.backgroundColor = 'green';
   })
   
})




button.addEventListener('click', () => {
    usersGrid = parseInt(prompt('How many squares?'));
    numberOfSquares = usersGrid * usersGrid;
    container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
    generateGrid();
});

container.style.display = 'grid';
container.style.justifyContent = 'center';
container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
container.style.width = '600px';
container.style.height = '600px';


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


