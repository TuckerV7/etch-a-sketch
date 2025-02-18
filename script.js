const container = document.querySelector('#container');


let gridArr = Array.from(document.querySelectorAll('.boxClass'));

//makes starting grid (8x8);
function makeGrid(num){
   let height = (700 / num)+'px';
   let width = (700 / num)+'px';
   
   for (let i = 0; i < (num * num); i++){
   let box = document.createElement('div');
   box.classList.add('boxClass');
   box.id = 'boxid';
   box.style.height = height;
   box.style.width = width;
   gridArr.push(i);
   container.appendChild(box);

   }
};
makeGrid(15);


let cells = document.querySelectorAll('.boxClass');

cells.forEach(div => {
  div.addEventListener('mouseenter', () => {
     div.classList.toggle('colorClass');
     div.classList.toggle('boxClass');

  });
});


//changes grid to _x_, whatever the user inputs.
    const form = document.getElementById('myForm');
    const numberInput = document.getElementById('numberInput');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const enteredValue = numberInput.value;
      const number = parseFloat(enteredValue);

      if (isNaN(number)) {
        alert('Invalid input. Please enter a number.');
      } else {
      for (let i = 0; i < gridArr.length; i++){
         const parentElement = document.getElementById('container');
         const childElement = document.getElementById('boxid');
         
         parentElement.removeChild(childElement);
      
      };
      gridArr.length = 0;
      makeGrid(number);
   };
    let cells = document.querySelectorAll('.boxClass');

    cells.forEach(div => {
      div.addEventListener('mouseenter', () => {
         div.classList.toggle('colorClass');
         div.classList.toggle('boxClass');

      });

   const reset = document.getElementById('reset');

   reset.addEventListener('click', () => {
         
            cells.forEach(div => {
               if (div.classList.contains('colorClass')) {
                  div.classList.toggle('colorClass');
                  div.classList.toggle('boxClass');
               } 
            });
         });
    });
   });
 
   const reset = document.getElementById('reset');

   reset.addEventListener('click', () => {
 
    cells.forEach(div => {
      if (div.classList.contains('colorClass')) {
         div.classList.toggle('colorClass');
         div.classList.toggle('boxClass');
      } 
   });
 });