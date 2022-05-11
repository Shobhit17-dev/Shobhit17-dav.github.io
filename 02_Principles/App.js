// Selection of variables from HTML
const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
const slider3 = document.querySelector("#slider3");
const slider4 = document.querySelector("#slider4");


const playButton = document.querySelector("#play-button");
const intPanel2 = document.querySelector("#sheet2 .intPanels");


const sketch1 = document.querySelector("#sketch1");
const sketch2 = document.querySelector("#sketch2");
const sketch3 = document.querySelector("#sketch3");


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for the initial setup

function disableMovement() {
    slider1.disabled = true;
}

function disableSize() {
    slider2.disabled = true;
}

function unDisableMovement() {
    slider1.disabled = false;
}

function unDisableSize() {
    slider2.disabled = false;
}

disableMovement();
disableSize();



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 1 sliders - Regulation

slider3.addEventListener('input', () => {

    if (slider3.value == 2) {
        slider1.value = 1;
        unDisableSize();

        if (slider2.value == 1 && slider3.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/2.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider2.value == 2 && slider3.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/3.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider2.value == 3 && slider3.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/4.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        }

        slider2.addEventListener('input', () => {
            if (slider2.value == 1 && slider3.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/2.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider2.value == 2 && slider3.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/3.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider2.value == 3 && slider3.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/4.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            }
        })
    } else {
        unDisableMovement();
        unDisableSize();

        if (slider1.value == 1 && slider2.value == 1) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/5.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 1 && slider2.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/7.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 1 && slider2.value == 3) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/9.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 1) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/6.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/8.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 3) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/10.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 1 && slider2.value == 1) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/5.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 1 && slider2.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/7.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 1 && slider2.value == 3) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/9.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 1) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/6.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 2) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/8.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        } else if (slider1.value == 2 && slider2.value == 3) {
            sketch1.style.backgroundImage = "url(00Images/00Regulation/10.png)";
            sketch1.style.transition = 'all ease-in 0.25s';
        }

        slider1.addEventListener('input', () => {
            if (slider1.value == 1 && slider2.value == 1) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/5.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 1 && slider2.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/7.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 1 && slider2.value == 3) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/9.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 1) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/6.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/8.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 3) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/10.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            }
        })

        slider2.addEventListener('input', () => {
            if (slider1.value == 1 && slider2.value == 1) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/5.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 1 && slider2.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/7.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 1 && slider2.value == 3) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/9.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 1) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/6.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 2) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/8.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            } else if (slider1.value == 2 && slider2.value == 3) {
                sketch1.style.backgroundImage = "url(00Images/00Regulation/10.png)";
                sketch1.style.transition = 'all ease-in 0.25s';
            }
        })
    }

    if (slider3.value == 2 && slider1.value == 2) {
        disableMovement();
    } else if (slider3.value == 2 && slider1.value == 1) {
        disableMovement();
    }
})



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 2 button - Migration

const stopButton = document.createElement('button');
stopButton.innerHTML = 'STOP';
stopButton.classList.add('int-panel-buttons');

playButton.addEventListener('click', () => {
    intPanel2.appendChild(stopButton);
    intPanel2.style.justifyContent = 'space-between';
    intPanel2.style.padding = '0 120px';
    sketch2.style.backgroundImage = "url('00Images/01Mig/mig.gif')"
})

stopButton.addEventListener('click', () => {
    intPanel2.removeChild(stopButton);
    intPanel2.style.justifyContent = 'center';
    intPanel2.style.padding = '0';
    sketch2.style.backgroundImage = "url('00Images/01Mig/0.png')"
})



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 3 sliders - Keystone

slider4.addEventListener('input', () => {
    if (slider4.value == 1) {
        sketch3.style.backgroundImage = "url(00Images/02Keystone/0.png)";
        sketch3.style.transition = 'all ease-in 0.25s';
    } else {
        for (let i = 2; i <= 5; i++) {
            if (slider4.value == i) {
                sketch3.style.backgroundImage = `url(00Images/02Keystone/${i - 1}.png)`;
                sketch3.style.transition = 'all ease-in 0.25s';
            }
        }
    }
})




