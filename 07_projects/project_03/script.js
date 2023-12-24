// Add a clock to the page by targeting the #clock element in the HTML
// want the clock to update every second
document.addEventListener('DOMContentLoaded', function() {
    const clock = document.querySelector('#clock');
    // console.log(clock);
    setInterval(function() {
        clock.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
});


// Difference between setInterval and setTimeout
// setInterval will run the function "every" x seconds
// setTimeout will run the function "once" after x seconds