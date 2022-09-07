

let header = document.querySelector('.header');
let container = document.querySelector('#container');




// Populate the container with a 16x16 grid of squares (divs);
for(let i = 0; i < 256; i++) {
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

// squareDiv.forEach(square => {
//     square.addEventListener('mouseleave', (e) => {
//       // console.log(e)
//       e.target.style.backgroundColor = 'black';
//    })
   
// })


