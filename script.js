const container = document.querySelector('#container');





    


let makeBoxes = (num) => {
   for (let i = 0; i < num; i++) {
    const newBox = document.createElement('div');
    //newBox.style.width = '200px';
    //newBox.style.maxHeight = '200px';
    newBox.style.display = 'flex';
    newBox.style.flex = '1 1 auto';
    newBox.style.flexWrap = 'wrap';

    newBox.style.borderStyle = 'solid';
    newBox.style.borderColor = 'black';
    newBox.textContent = `Box ${i + 1}`;
    container.appendChild(newBox);

   }
}

makeBoxes(16);



