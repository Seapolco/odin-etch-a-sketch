

let header = document.querySelector('.header');
let container = document.querySelector('.container');
let button = document.querySelector('.userInput');
let body = document.querySelector('body');
let randomMode = document.querySelector('.random');
let greenMode = document.querySelector('.green');
let yellowMode = document.querySelector('.yellow');
let blueMode = document.querySelector('.blue');
let orangeMode = document.querySelector('.orange');
let slider = document.querySelector('#myRange');



let usersGrid = 32;
let numOfSquares = usersGrid * usersGrid;

let colorMode = 'green';



function randomColor() {
	let random1 = Math.floor(Math.random() * 255) + 1
  	let random2 = Math.floor(Math.random() * 255) + 1
    let random3 = Math.floor(Math.random() * 255) + 1
    let red,green,blue;
  
  return `rgb(${random1},${random2},${random3})`
  
  
}
// let currentColor = 

function addHover(color) {

    let squareDiv = document.querySelectorAll('.square');
    console.log(`ADD${squareDiv}`)
    squareDiv.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      console.log(color);
      if(color === 'rainbow') {
        e.target.style.backgroundColor = `${randomColor()}` 
      } else if(color === 'green') {
        e.target.style.backgroundColor = 'green';
      } else if(color === 'yellow') {
        e.target.style.backgroundColor = 'yellow';
      } else if(color === 'blue') {
        e.target.style.backgroundColor = 'blue';
      } else if(color === 'orange') {
        e.target.style.backgroundColor = 'orange';
      }
        

      

    //   e.target.style.backgroundColor = ;
   })
  })
}

randomMode.addEventListener('click', () => {
//   let squareDiv = document.querySelectorAll('.square');
//   console.log(`RAND${squareDiv}`)
 

//   squareDiv.forEach(square => {
//   square.addEventListener('mouseover', (e) => {
//     // console.log(e)
//     // e.target.style.backgroundColor = squareColor;
//     e.target.style.backgroundColor = `${randomColor()}` ;
//  })
// })
  colorMode = 'rainbow';
  generateGrid('rainbow');
})

greenMode.addEventListener('click', () => {
  colorMode = 'green';
  generateGrid('green');
});
yellowMode.addEventListener('click', () => {
  colorMode = 'yellow';
  generateGrid('yellow');
})
blueMode.addEventListener('click', () => {
  colorMode = 'blue';
  generateGrid('blue');
})
orangeMode.addEventListener('click', () => {
  colorMode = 'orange';
  generateGrid('orange');
})


function generateGrid(color) {

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
    addHover(color);
}

31


generateGrid('green');




container.style.display = 'grid';
container.style.justifyContent = 'center';
container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
container.style.gridTemplateRows = `repeat(${usersGrid},1fr)`;
container.style.width = '500px';
container.style.height = '500px';

// button.addEventListener('click', () => {
//     usersGrid = parseInt(prompt('How many squares?'));
//     if(usersGrid > 100) {
//         usersGrid = 100;
//     }
//     numOfSquares = usersGrid * usersGrid;
//     console.log(`usersGrid${usersGrid}`)
//     container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
//     container.style.gridTemplateRows = `repeat(${usersGrid},1fr)`;
//     container.style.display = 'grid';
//     container.style.justifyContent = 'center';
//     container.style.width = '500px';
//     container.style.height = '500px';
//     generateGrid(colorMode);
    
// });

slider.addEventListener('mouseup', () => {
  console.log(slider.value);
      usersGrid = slider.value;
    // if(usersGrid > 100) {
    //     usersGrid = 100;
    // }
    numOfSquares = usersGrid * usersGrid;
    console.log(`usersGrid${usersGrid}`)
    container.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
    container.style.gridTemplateRows = `repeat(${usersGrid},1fr)`;
    container.style.display = 'grid';
    container.style.justifyContent = 'center';
    container.style.width = '500px';
    container.style.height = '500px';
    generateGrid(colorMode);
})

// let square = document.querySelector('.square');
// console.log(square.style.backgroundColor)

// let current


// newContainer.style.display = 'grid';
// newContainer.style.justifyContent = 'center';
// newContainer.style.gridTemplateColumns = `repeat(${usersGrid},1fr)`;
// newContainer.style.width = '600px';
// newContainer.style.height = '600px';




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


