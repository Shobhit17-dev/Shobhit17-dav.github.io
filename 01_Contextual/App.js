// Selection of variables from HTML
let sketch1 = document.querySelector("#sketch1");
let slider1 = document.querySelector("#slider1");

let slider3 = document.querySelector("#slider3");
let sketch3 = document.querySelector("#sketch3");



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for slider1

slider1.addEventListener('input', () => {
    if (slider1.value == 1) {
        sketch1.style.backgroundImage = "url('00Images/00_Map/1.jpg')";
        sketch1.style.transition = 'all ease-in 0.25s';
    } else if (slider1.value == 2) {
        sketch1.style.backgroundImage = "url('00Images/00_Map/3.jpg')";
        sketch1.style.transition = 'all ease-in 0.25s';
    }
    else if (slider1.value == 3) {
        sketch1.style.backgroundImage = "url('00Images/00_Map/5.jpg')";
        sketch1.style.transition = 'all ease-in 0.25s';
    }
    else if (slider1.value == 4) {
        sketch1.style.backgroundImage = "url('00Images/00_Map/7.jpg')";
        sketch1.style.transition = 'all ease-in 0.25s';
    }
    else if (slider1.value == 5) {
        sketch1.style.backgroundImage = "url('00Images/00_Map/9.jpg')";
        sketch1.style.transition = 'all ease-in 0.25s';
    }
})

// Code for slider3
slider3.addEventListener('input', () => {
    if (slider3.value == 1) {
        sketch3.style.backgroundImage = "url(00Images/01_vegChange/01.jpg)";
        sketch3.style.transition = 'all ease-in 0.25s';
    } else {
        for (let i = 2; i <= 12; i++) {
            if (slider3.value == i) {
                sketch3.style.backgroundImage = `url(00Images/01_vegChange/0${i}.jpg)`;
                sketch3.style.transition = 'all ease-in 0.25s';
            }
        }
    }
})



// --------------------------------------------------------------------------------------------------------------------------------------