// on form submit event take the value of the input field and append it to the list

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const input_height = document.querySelector('input'); // this will be string
    const input_height = parseInt(document.querySelector('#height').value);

    const input_weight = parseInt(document.querySelector('#weight').value);

    console.log(input_height, input_weight);
    const bmi = input_weight / ((input_height / 100) ** 2).toFixed(2);
    console.log(bmi);

    const result = document.querySelector('#results');

    if (input_height === '' || input_height < 0 || isNaN(input_height)) {
    results.innerHTML = `Please give a valid height ${input_height}`;
  } else if (input_weight === '' || weight < 0 || isNaN(input_weight)) {
    results.innerHTML = `Please give a valid weight ${input_weight}`;
  } else {
    const bmi = (input_weight / ((input_height * input_height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

})