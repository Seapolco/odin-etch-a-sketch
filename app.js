

let header = document.querySelector('.header');
let container = document.querySelector('.container');

let usersGrid = parseInt(prompt('How many columns/grid ye like?'));

console.log(usersGrid)

let numOfSquares = usersGrid * usersGrid;

console.log(numOfSquares)



// Populate the container with a 16x16 grid of squares (divs);
for(let i = 0; i < 1156; i++) {
    let square = document.createElement('div');
    // let divContent = document.createTextNode('');
    square.classList.add('square');
    // div.appendChild(divContent);
    container.insertAdjacentElement('beforeend', square); 
}


// Create "hover" event listener

let squareDiv = document.querySelectorAll('.square');

// console.log(squareDiv)

squareDiv.forEach(square => {
     square.addEventListener('mouseover', (e) => {
       // console.log(e)
       e.target.style.backgroundColor = 'green';
    })
    
})

//container.style.gridTemplateColumns = "repeat(16,1fr)";


// squareDiv.forEach(square => {
//     square.addEventListener('mouseleave', (e) => {
//       // console.log(e)
//       e.target.style.backgroundColor = 'black';
//    })
   
// })


