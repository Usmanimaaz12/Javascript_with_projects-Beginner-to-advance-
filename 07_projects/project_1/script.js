

// get the buttons
const buttons = document.querySelectorAll('.button'); 

// get the body
const body = document.querySelector('body');

// loop through the buttons
buttons.forEach(function (button) {
    console.log(button);
    
    // add an event listener to each button
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      }
      
    //   body.style.backgroundColor = e.target.id;
    
  });
});