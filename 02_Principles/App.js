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


const grass = document.querySelector("#grass");
const wildebeest = document.querySelector("#wildebeest");
const s0 = document.querySelector("#s_0");
const st1 = document.querySelector("#s_t_1");
const st2 = document.querySelector("#s_t_2");
const sb1 = document.querySelector("#s_b_1");
const sb2 = document.querySelector("#s_b_2");
const sp1 = document.querySelector("#sp1");
const sp2 = document.querySelector("#sp2");
const sp3 = document.querySelector("#sp3");
const sp4 = document.querySelector("#sp4");
const sp5 = document.querySelector("#sp5");
const sp6 = document.querySelector("#sp6");
const sp7 = document.querySelector("#sp7");
const sp8 = document.querySelector("#sp8");
const sp9 = document.querySelector("#sp9");
const sp10 = document.querySelector("#sp10");

const species = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10];

const species3 = document.querySelector("#species_3");
const phenomena3 = document.querySelector("#phenomena_3");
const dirEffects3 = document.querySelector("#dir_effects_3");
const indirEffects3 = document.querySelector("#indir_effects_3");
const biodiversity3 = document.querySelector("#biodiversity_3");
const stability3 = document.querySelector("#stability_3");
const titleText = document.querySelector("#title_text");
const keystoneText = document.querySelector("#keystone_text");

const sketch3Viz = [species3, phenomena3, dirEffects3, indirEffects3, biodiversity3, stability3];
const titles = ['', 'Direct Effects', 'Indirect Effects', 'Biodiversity', 'Stability + Resilience'];


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for the initial setup

wildebeest.style.display = 'none';
st1.style.display = 'none';
st2.style.display = 'none';
sb1.style.display = 'none';
sb2.style.display = 'none';

for (let i = 1; i <= 10; i++) {
    if (i == 1) {
        species[i - 1].style.display = 'block';
    } else {
        species[i - 1].style.display = 'none';
    }
}

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

    if (slider3.value == 3) {
        slider1.value == 1;
        disableMovement();
        unDisableSize();
        grass.style.display = 'none';
        wildebeest.style.display = 'block';

        sb2.style.display = 'block';
        s0.style.display = 'none';
        sb1.style.display = 'none';
        st1.style.display = 'none';
        st2.style.display = 'none';

        if (slider2.value == 1 && slider3.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 2) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider2.value == 2 && slider3.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 3) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider2.value == 3 && slider3.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 4) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        }

        slider2.addEventListener('input', () => {
            if (slider2.value == 1 && slider3.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 2) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider2.value == 2 && slider3.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 3) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider2.value == 3 && slider3.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 4) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            }
        })
    } else if (slider3.value == 1) {
        unDisableMovement();
        unDisableSize();
        wildebeest.style.display = 'none';
        grass.style.display = 'block';

        if (slider1.value == 1 && slider2.value == 1) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'block';
            for (let i = 1; i <= 10; i++) {
                if (i == 5) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 1 && slider2.value == 2) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'block';
            for (let i = 1; i <= 10; i++) {
                if (i == 7) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 1 && slider2.value == 3) {
            sb2.style.display = 'block';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 9) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 1) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'block';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 6) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 2) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'block';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 8) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 3) {
            sb2.style.display = 'block';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 10) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 1 && slider2.value == 1) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'block';
            for (let i = 1; i <= 10; i++) {
                if (i == 5) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 1 && slider2.value == 2) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'block';
            for (let i = 1; i <= 10; i++) {
                if (i == 7) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 1 && slider2.value == 3) {
            sb2.style.display = 'block';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 9) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 1) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'block';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 6) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 2) {
            sb2.style.display = 'none';
            s0.style.display = 'none';
            sb1.style.display = 'block';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 8) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider1.value == 2 && slider2.value == 3) {
            sb2.style.display = 'block';
            s0.style.display = 'none';
            sb1.style.display = 'none';
            st1.style.display = 'none';
            st2.style.display = 'none';
            for (let i = 1; i <= 10; i++) {
                if (i == 10) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        }

        slider1.addEventListener('input', () => {
            if (slider1.value == 1 && slider2.value == 1) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'block';
                for (let i = 1; i <= 10; i++) {
                    if (i == 5) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 1 && slider2.value == 2) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'block';
                for (let i = 1; i <= 10; i++) {
                    if (i == 7) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 1 && slider2.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 9) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 1) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'block';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 6) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 2) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'block';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 8) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 10) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            }
        })

        slider2.addEventListener('input', () => {
            if (slider1.value == 1 && slider2.value == 1) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'block';
                for (let i = 1; i <= 10; i++) {
                    if (i == 5) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 1 && slider2.value == 2) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'block';
                for (let i = 1; i <= 10; i++) {
                    if (i == 7) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 1 && slider2.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 9) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 1) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'block';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 6) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 2) {
                sb2.style.display = 'none';
                s0.style.display = 'none';
                sb1.style.display = 'block';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 8) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            } else if (slider1.value == 2 && slider2.value == 3) {
                sb2.style.display = 'block';
                s0.style.display = 'none';
                sb1.style.display = 'none';
                st1.style.display = 'none';
                st2.style.display = 'none';
                for (let i = 1; i <= 10; i++) {
                    if (i == 10) {
                        species[i - 1].style.display = 'block';
                    } else {
                        species[i - 1].style.display = 'none';
                    }
                }
            }
        })
    } else {
        disableMovement();
        disableSize();
        s0.style.display = 'block';
        st1.style.display = 'none';
        st2.style.display = 'none';
        sb1.style.display = 'none';
        sb2.style.display = 'none';

        species[0].style.display = 'block';
        for (let i = 2; i <= 10; i++) {
            species[i - 1].style.display = 'none';
        }
    }

    if (slider3.value == 3 && slider1.value == 2) {
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
    sketch2.style.backgroundImage = "url('00Images/01Mig/0.jpg')"
})



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 3 sliders - Keystone

species3.style.display = 'block';
phenomena3.style.display = 'block';
dirEffects3.style.display = 'none';
indirEffects3.style.display = 'none';
biodiversity3.style.display = 'none';
stability3.style.display = 'none';
titleText.style.display = 'block';

slider4.addEventListener('input', () => {
    if (slider4.value == 1) {
        species3.style.display = 'block';
        phenomena3.style.display = 'block';
        dirEffects3.style.display = 'none';
        indirEffects3.style.display = 'none';
        biodiversity3.style.display = 'none';
        stability3.style.display = 'none';
        titleText.innerHTML = titles[0];
    } else {
        for (let i = 2; i <= 5; i++) {
            if (slider4.value == i) {
                sketch3Viz[i].style.display = 'block';
                titleText.innerHTML = titles[i - 1];
                for (let j = 3; j <= 5; j++) {
                    if (j > i) {
                        sketch3Viz[j].style.display = 'none';
                    }
                }
            }
        }
    }
})




