// Populate the container with a 16x16 grid of squares (divs);

let header = document.querySelector('.header');
let container = document.querySelector('#container');

console.log(container)



for(let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    // let divContent = document.createTextNode('');
    div.classList.add('square');
    // div.appendChild(divContent);
    console.log(i)
    container.insertAdjacentElement('beforeend', div); 
}

// container.insertAdjacentElement('beforeend', div);
