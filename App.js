// SELECTION OF VARIABLES FOR SECTION 1
let sketch1 = document.querySelector("#sketch1");
let slider1 = document.querySelector("#slider1");

let sheet1Map1 = document.querySelector("#sheet1-map1");
let sheet1Map2 = document.querySelector("#sheet1-map2");
let sheet1Map3 = document.querySelector("#sheet1-map3");
let sheet1Map4 = document.querySelector("#sheet1-map4");
let sheet1Map5 = document.querySelector("#sheet1-map5");

let month1 = document.querySelector("#jan");
let month2 = document.querySelector("#feb");
let month3 = document.querySelector("#mar");
let month4 = document.querySelector("#apr");
let month5 = document.querySelector("#may");
let month6 = document.querySelector("#jun");
let month7 = document.querySelector("#jul");
let month8 = document.querySelector("#aug");
let month9 = document.querySelector("#sep");
let month10 = document.querySelector("#oct");
let month11 = document.querySelector("#nov");
let month12 = document.querySelector("#dec");

let months = [month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12];
let dryColor = '#e54f3b';
let wetColor = '#3f83b2';
let neutralShade = 'white';
let seasonColorChoices = [neutralShade, neutralShade, wetColor, wetColor, wetColor, neutralShade, dryColor, dryColor, dryColor, neutralShade, wetColor, neutralShade];
let seasonNames = ['', '', 'WET', 'WET', 'WET', '', 'DRY', 'DRY', 'DRY', '', 'WET', ''];
const buttonVeg = document.querySelector("#button-veg");
const seasonColor = document.querySelector("#season_color");
let slider3 = document.querySelector("#slider3");
let sketch3 = document.querySelector("#sketch3");
const focusZone = document.querySelector(".veggie-10");

let cls4 = document.querySelectorAll(".cls-4");


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 1 slider - Location & constitution
slider1.addEventListener('input', () => {
    if (slider1.value == 1) {
        sheet1Map1.style.display = 'block';
        sheet1Map2.style.display = 'none';
        sheet1Map3.style.display = 'none';
        sheet1Map4.style.display = 'none';
        sheet1Map5.style.display = 'none';
        sheet1Map1.style.transition = 'all ease-in 0.25s';
    } else if (slider1.value == 2) {
        sheet1Map2.style.display = 'block';
        sheet1Map1.style.display = 'none';
        sheet1Map3.style.display = 'none';
        sheet1Map4.style.display = 'none';
        sheet1Map5.style.display = 'none';
        sheet1Map2.style.transition = 'all ease-in 0.25s';
    } else if (slider1.value == 3) {
        sheet1Map3.style.display = 'block';
        sheet1Map1.style.display = 'none';
        sheet1Map2.style.display = 'none';
        sheet1Map4.style.display = 'none';
        sheet1Map5.style.display = 'none';
        sheet1Map3.style.transition = 'all ease-in 0.25s';
    } else if (slider1.value == 4) {
        sheet1Map4.style.display = 'block';
        sheet1Map1.style.display = 'none';
        sheet1Map2.style.display = 'none';
        sheet1Map3.style.display = 'none';
        sheet1Map5.style.display = 'none';
        sheet1Map4.style.transition = 'all ease-in 0.25s';
    } else if (slider1.value == 5) {
        sheet1Map5.style.display = 'block';
        sheet1Map1.style.display = 'none';
        sheet1Map2.style.display = 'none';
        sheet1Map3.style.display = 'none';
        sheet1Map4.style.display = 'none';
        sheet1Map5.style.transition = 'all ease-in 0.25s';
    }
})


// Code for SHEET2 slider - climate & habitats
const svgOn1 = document.querySelector("#svg_on_1");
const svgOn2 = document.querySelector("#svg_on_2");
const svgOn3 = document.querySelector("#svg_on_3");
// const titleLabel = document.querySelector("#title_label");
let slider2 = document.querySelector("#slider2");

let svgForSlider3 = [svgOn1, svgOn2, svgOn3];
let allLabels = ['Distribution of Zones', 'The Climatic Gradient', 'Variation in Habitats'];


svgForSlider3[0].style.display = 'block';
svgForSlider3[1].style.display = 'none';
svgForSlider3[2].style.display = 'none';

slider2.addEventListener('input', () => {
    for (let i = 1; i <= 3; i++) {
        if (slider2.value == i) {
            svgForSlider3[i - 1].style.display = 'block';
            for (let j = 2; j <= 3; j++) {
                if (j > i) {
                    svgForSlider3[j - 1].style.display = 'none';
                }
            }
            for (let k = 1; k <= 1; k++) {
                if (k < i) {
                    svgForSlider3[k - 1].style.display = 'none';
                }
            }
        }
    }
})


// Code for sheet 3 slider - how climate affects the environment
for (let i = 2; i <= 12; i++) {
    months[i - 1].style.display = 'none';
}

focusZone.style.stroke = '#21170a';
focusZone.style.fill = neutralShade;
focusZone.style.opacity = '0.4';

let focusZoneFill = [neutralShade, neutralShade, wetColor, wetColor, wetColor, neutralShade, dryColor, dryColor, dryColor, neutralShade, wetColor, neutralShade];

slider3.addEventListener('input', () => {
    for (let i = 1; i <= 12; i++) {
        if (slider3.value == i) {
            months[i - 1].style.display = 'block';
            seasonColor.style.backgroundColor = seasonColorChoices[i - 1];
            seasonColor.style.transition = 'background-color 0.5s';
            seasonColor.innerHTML = seasonNames[i - 1];
            focusZone.style.fill = focusZoneFill[i - 1];
            focusZone.style.transition = 'fill 0.5s';
            for (let j = 1; j <= 12; j++) {
                if (j > i) {
                    months[j - 1].style.display = 'none';
                }
            }
            for (let k = 1; k <= 12; k++) {
                if (k < i) {
                    months[k - 1].style.display = 'none';
                }
            }
        }
    }
})

// Code for sheet 3 button (autoplay) - how climate affects the environment
function delayedMonthChange() {
    slider3.value = 1;
    seasonColor.style.backgroundColor = seasonColorChoices[0];
    seasonColor.style.transition = 'background-color 0.5s';
    seasonColor.innerHTML = seasonNames[0];
    focusZone.style.fill = focusZoneFill[0];
    months[0].style.display = 'block';
    for (let i = 1; i <= 11; i++) {
        months[i].style.display = 'none';
    }
    setTimeout(() => {
        slider3.value = 2;
        seasonColor.style.backgroundColor = seasonColorChoices[1];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[1];
        focusZone.style.fill = focusZoneFill[1];
        months[1].style.display = 'block';
        for (let i = 2; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 0; k++) {
            months[k].style.display = 'none';
        }
    }, 500);
    setTimeout(() => {
        slider3.value = 3;
        seasonColor.style.backgroundColor = seasonColorChoices[2];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[2];
        focusZone.style.fill = focusZoneFill[2];
        months[2].style.display = 'block';
        for (let i = 3; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 1; k++) {
            months[k].style.display = 'none';
        }
    }, 1000);
    setTimeout(() => {
        slider3.value = 4;
        seasonColor.style.backgroundColor = seasonColorChoices[3];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[3];
        focusZone.style.fill = focusZoneFill[3];
        months[3].style.display = 'block';
        for (let i = 4; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 2; k++) {
            months[k].style.display = 'none';
        }
    }, 1500);
    setTimeout(() => {
        slider3.value = 5;
        seasonColor.style.backgroundColor = seasonColorChoices[4];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[4];
        focusZone.style.fill = focusZoneFill[4];
        months[4].style.display = 'block';
        for (let i = 5; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 3; k++) {
            months[k].style.display = 'none';
        }
    }, 2000);
    setTimeout(() => {
        slider3.value = 6;
        seasonColor.style.backgroundColor = seasonColorChoices[5];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[5];
        focusZone.style.fill = focusZoneFill[5];
        months[5].style.display = 'block';
        for (let i = 6; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 4; k++) {
            months[k].style.display = 'none';
        }
    }, 2500);
    setTimeout(() => {
        slider3.value = 7
        seasonColor.style.backgroundColor = seasonColorChoices[6];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[6];
        focusZone.style.fill = focusZoneFill[6];
        months[6].style.display = 'block';
        for (let i = 7; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 5; k++) {
            months[k].style.display = 'none';
        }
    }, 3000);
    setTimeout(() => {
        slider3.value = 8;
        seasonColor.style.backgroundColor = seasonColorChoices[7];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[7];
        focusZone.style.fill = focusZoneFill[7];
        months[7].style.display = 'block';
        for (let i = 8; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 6; k++) {
            months[k].style.display = 'none';
        }
    }, 3500);
    setTimeout(() => {
        slider3.value = 9;
        seasonColor.style.backgroundColor = seasonColorChoices[8];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[8];
        focusZone.style.fill = focusZoneFill[8];
        months[8].style.display = 'block';
        for (let i = 9; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 7; k++) {
            months[k].style.display = 'none';
        }
    }, 4000);
    setTimeout(() => {
        slider3.value = 10;
        seasonColor.style.backgroundColor = seasonColorChoices[9];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[9];
        focusZone.style.fill = focusZoneFill[9];
        months[9].style.display = 'block';
        for (let i = 10; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 8; k++) {
            months[k].style.display = 'none';
        }
    }, 4500);
    setTimeout(() => {
        slider3.value = 11;
        seasonColor.style.backgroundColor = seasonColorChoices[10];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[10];
        focusZone.style.fill = focusZoneFill[10];
        months[10].style.display = 'block';
        for (let i = 11; i <= 11; i++) {
            months[i].style.display = 'none';
        }
        for (let k = 0; k <= 9; k++) {
            months[k].style.display = 'none';
        }
    }, 5000);
    setTimeout(() => {
        slider3.value = 12;
        seasonColor.style.backgroundColor = seasonColorChoices[11];
        seasonColor.style.transition = 'background-color 0.5s';
        seasonColor.innerHTML = seasonNames[11];
        focusZone.style.fill = focusZoneFill[11];
        months[11].style.display = 'block';
        for (let k = 0; k <= 10; k++) {
            months[k].style.display = 'none';
        }
        sketch3.appendChild(buttonVeg);
    }, 5500);
}

buttonVeg.addEventListener('click', () => {
    sketch3.removeChild(buttonVeg);
    delayedMonthChange();
})
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// SELECTION OF VARIABLES FOR SECTION 2
const slider4 = document.querySelector("#slider4");
const slider5 = document.querySelector("#slider5");
const slider6 = document.querySelector("#slider6");

const slider7 = document.querySelector("#slider7");


const playButton = document.querySelector("#play-button");
const intPanel5 = document.querySelector("#intPanel5");


const sketch4 = document.querySelector("#sketch4");
const sketch5 = document.querySelector("#sketch5");
const sketch6 = document.querySelector("#sketch6");


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

const sketch6Viz = [species3, phenomena3, dirEffects3, indirEffects3, biodiversity3, stability3];
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
    slider4.disabled = true;
}

function unDisableMovement() {
    slider4.disabled = false;
}

function disableSize() {
    slider5.disabled = true;
}

function unDisableSize() {
    slider5.disabled = false;
}

disableMovement();
disableSize();



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEET 4 sliders - Regulation
slider6.addEventListener('input', () => {

    if (slider6.value == 3) {
        slider4.value = 1;
        disableMovement();
        unDisableSize();
        grass.style.display = 'none';
        wildebeest.style.display = 'block';

        sb2.style.display = 'block';
        s0.style.display = 'none';
        sb1.style.display = 'none';
        st1.style.display = 'none';
        st2.style.display = 'none';

        if (slider5.value == 1 && slider6.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 2) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider5.value == 2 && slider6.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 3) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        } else if (slider5.value == 3 && slider6.value == 3) {
            for (let i = 1; i <= 10; i++) {
                if (i == 4) {
                    species[i - 1].style.display = 'block';
                } else {
                    species[i - 1].style.display = 'none';
                }
            }
        }

        slider5.addEventListener('input', () => {
            if (slider5.value == 1 && slider6.value == 3) {
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
            } else if (slider5.value == 2 && slider6.value == 3) {
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
            } else if (slider5.value == 3 && slider6.value == 3) {
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
    } else if (slider6.value == 1) {
        unDisableMovement();
        unDisableSize();
        wildebeest.style.display = 'none';
        grass.style.display = 'block';

        if (slider4.value == 1 && slider5.value == 1) {
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
        } else if (slider4.value == 1 && slider5.value == 2) {
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
        } else if (slider4.value == 1 && slider5.value == 3) {
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
        } else if (slider4.value == 2 && slider5.value == 1) {
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
        } else if (slider4.value == 2 && slider5.value == 2) {
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
        } else if (slider4.value == 2 && slider5.value == 3) {
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
        } else if (slider4.value == 1 && slider5.value == 1) {
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
        } else if (slider4.value == 1 && slider5.value == 2) {
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
        } else if (slider4.value == 1 && slider5.value == 3) {
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
        } else if (slider4.value == 2 && slider5.value == 1) {
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
        } else if (slider4.value == 2 && slider5.value == 2) {
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
        } else if (slider4.value == 2 && slider5.value == 3) {
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

        slider4.addEventListener('input', () => {
            if (slider4.value == 1 && slider5.value == 1) {
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
            } else if (slider4.value == 1 && slider5.value == 2) {
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
            } else if (slider4.value == 1 && slider5.value == 3) {
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
            } else if (slider4.value == 2 && slider5.value == 1) {
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
            } else if (slider4.value == 2 && slider5.value == 2) {
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
            } else if (slider4.value == 2 && slider5.value == 3) {
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

        slider5.addEventListener('input', () => {
            if (slider4.value == 1 && slider5.value == 1) {
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
            } else if (slider4.value == 1 && slider5.value == 2) {
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
            } else if (slider4.value == 1 && slider5.value == 3) {
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
            } else if (slider4.value == 2 && slider5.value == 1) {
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
            } else if (slider4.value == 2 && slider5.value == 2) {
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
            } else if (slider4.value == 2 && slider5.value == 3) {
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

    if (slider6.value == 3 && slider4.value == 2) {
        disableMovement();
    } else if (slider6.value == 2 && slider4.value == 1) {
        disableMovement();
    }
})


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEET 5 button - Migration
const stopButton = document.createElement('button');
stopButton.innerHTML = 'STOP';
stopButton.classList.add('int-panel-buttons');

sketch5.style.backgroundImage = "url('00Images/01Mig/0.jpg')";

playButton.addEventListener('click', () => {
    intPanel5.appendChild(stopButton);
    intPanel5.style.flexDirection = 'row';
    intPanel5.style.justifyContent = 'space-between';
    intPanel5.style.padding = '0 120px';
    sketch5.style.backgroundImage = "url('00Images/01Mig/mig.gif')"
})

stopButton.addEventListener('click', () => {
    intPanel5.removeChild(stopButton);
    intPanel5.style.justifyContent = 'center';
    intPanel5.style.padding = '0';
    sketch5.style.backgroundImage = "url('00Images/01Mig/0.jpg')"
})


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for sheet 6 sliders - Keystone
species3.style.display = 'block';
phenomena3.style.display = 'block';
dirEffects3.style.display = 'none';
indirEffects3.style.display = 'none';
biodiversity3.style.display = 'none';
stability3.style.display = 'none';
titleText.style.display = 'block';

slider7.addEventListener('input', () => {
    if (slider7.value == 1) {
        species3.style.display = 'block';
        phenomena3.style.display = 'block';
        dirEffects3.style.display = 'none';
        indirEffects3.style.display = 'none';
        biodiversity3.style.display = 'none';
        stability3.style.display = 'none';
        titleText.innerHTML = titles[0];
    } else {
        for (let i = 2; i <= 5; i++) {
            if (slider7.value == i) {
                sketch6Viz[i].style.display = 'block';
                titleText.innerHTML = titles[i - 1];

                for (let j = 3; j <= 5; j++) {
                    if (j > i) {
                        sketch6Viz[j].style.display = 'none';
                    }
                }

                for (let k = 1; k <= 5; k++) {
                    if (k < i) {
                        sketch6Viz[k].style.display = 'block';
                    }
                }
            }
        }
    }
})
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEETBEFORE 7 - Trophic Interactions

const trSpcBase = document.querySelector("tr_spc_base");
const TrIntBase = document.querySelector("#tr_int_base");

const trB1 = document.querySelector("#tr_b_1");
const trB2 = document.querySelector("#tr_b_2");
const trB3 = document.querySelector("#tr_b_3");
const trB4 = document.querySelector("#tr_b_4");
const trB5 = document.querySelector("#tr_b_5");
const trB6 = document.querySelector("#tr_b_6");
const trB7 = document.querySelector("#tr_b_7");
const trB8 = document.querySelector("#tr_b_8");
const trB9 = document.querySelector("#tr_b_9");
const trB10 = document.querySelector("#tr_b_10");

const class1 = document.querySelectorAll(".tr_interaction-14");
const class2 = document.querySelectorAll(".tr_interaction-15");
const class3 = document.querySelectorAll(".tr_interaction-16");
const class4 = document.querySelectorAll(".tr_interaction-17");
const class5 = document.querySelectorAll(".tr_interaction-18");
const class6 = document.querySelectorAll(".tr_interaction-19");
const class7 = document.querySelectorAll(".tr_interaction-20");
const class8 = document.querySelectorAll(".tr_interaction-21");
const class9 = document.querySelectorAll(".tr_interaction-22");
const class10 = document.querySelectorAll(".tr_interaction-23");
const class11 = document.querySelectorAll(".tr_interaction-24");
const class12 = document.querySelectorAll(".tr_interaction-25");
const class13 = document.querySelectorAll(".tr_interaction-26");
const class14 = document.querySelectorAll(".tr_interaction-27");
const class15 = document.querySelectorAll(".tr_interaction-28");

let allClasses = [class1, class2, class3, class4, class5, class6, class7, class8, class9, class10, class11, class12, class13, class14, class15];


const tr1 = document.querySelector("#tr_1");
const tr2 = document.querySelector("#tr_2");
const tr3 = document.querySelector("#tr_3");
const tr4 = document.querySelector("#tr_4");
const tr5 = document.querySelector("#tr_5");
const tr6 = document.querySelector("#tr_6");
const tr7 = document.querySelector("#tr_7");
const tr8 = document.querySelector("#tr_8");
const tr9 = document.querySelector("#tr_9");
const tr10 = document.querySelector("#tr_10");


let hoverTr = [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10];
let baseTr = [trB1, trB2, trB3, trB4, trB5, trB6, trB7, trB8, trB9, trB10];

for (let i = 0; i < hoverTr.length; i++) {
    hoverTr[i].style.display = 'none';
}


for (let i = 0; i < baseTr.length; i++) {
    baseTr[i].addEventListener('mouseover', () => {
        hoverTr[i].style.display = 'block';
        trSpcBase.style.display = 'none';
        TrIntBase.style.display = 'none';
        for (let j = 0; j < baseTr.length; j++) {
            baseTr[j].style.display = 'none';
        }
    })
}

for (let i = 0; i < hoverTr.length; i++) {
    hoverTr[i].addEventListener('mouseout', () => {
        hoverTr[i].style.display = 'none';
        for (let j = 0; j < baseTr.length; j++) {
            baseTr[j].style.display = 'block';
        }
    })
}









// SELECTION OF VARIABLES FOR SECTION 3
const svg = d3.select("#svg_sheet_1");

// --------------------------------------------------------------------------------------------------------------------------------------
// code for the D3 visualization (circular tree map)

// set the dimensions and margins of the graph
const width = parseFloat(svg.attr('width'));
const height = parseFloat(svg.attr('height'));



// Importing data from CSV
const data = d3.csv("species.csv").then(data => {
    data.forEach(d => {
        d.population = parseFloat(d.population);
    })

    // Filter a bit the data -> more than 1 million inhabitants
    data = data.filter(function (d) { return d.population > 1 })

    // Color palette for type of animal
    const color = d3.scaleOrdinal()
        .domain(["carnivore", "herbivore"])
        .range(["#e54f3b", "#ac9a30"]);

    // Size scale for animals
    const size = d3.scaleLinear()
        .domain([17, 100660])
        .range([7, 75])  // circle will be between 7 and 55 px wide



    // create a tooltip
    const toolTip = d3.select("#sketch7")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("z-index", 10)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (event, d) {
        toolTip
            .style("opacity", 1)
    }
    const mousemove = function (event, d) {
        toolTip
            .html('<u>' + d.species + '</u>' + "<br>" + d.population + " individuals")
            .style("left", (event.x / 2 + 20) + "px")
            .style("top", (event.y / 2 - 30) + "px")
    }
    var mouseleave = function (event, d) {
        toolTip
            .style("opacity", 0)
    }



    // What happens when a circle is dragged ?
    //     function dragstarted(event, d) {
    //         if (!event.active) simulation.alphaTarget(.03).restart();
    //         d.fx = d.x;
    //         d.fy = d.y;
    //     }
    // function dragged(event, d) {
    //     d.fx = event.x;
    //     d.fy = event.y;
    // }
    // function dragended(event, d) {
    //     if (!event.active) simulation.alphaTarget(.03);
    //     d.fx = null;
    //     d.fy = null;
    // }



    // Initialize the circle: all located at the center of the svg area
    let node = svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("class", "node")
        .attr("r", d => size(d.population))
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", d => color(d.type))
        .style("fill-opacity", 1)
        .attr("stroke", "black")
        // .style("stroke-width", 1.5)
        .on("mouseover", mouseover) // What to do when hovered
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
    // .call(d3.drag() // call specific function when circle is dragged
    //     .on("start", dragstarted)
    //     .on("drag", dragged)
    //     .on("end", dragended));



    // Features of the forces applied to the nodes:
    const simulation = d3.forceSimulation()
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(.3)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.1).radius(function (d) { return (size(d.population) + 3) }).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function (d) {
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
        });
    console.log(data);
});

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// SELECTION OF VARIABLES FOR SECTION 4

const y1960 = document.querySelector("#_1960");
const y1961 = document.querySelector("#_1961");
const y1962 = document.querySelector("#_1962");
const y1963 = document.querySelector("#_1963");
const y1964 = document.querySelector("#_1964");
const y1965 = document.querySelector("#_1965");
const y1966 = document.querySelector("#_1966");
const y1967 = document.querySelector("#_1967");
const y1968 = document.querySelector("#_1968");
const y1969 = document.querySelector("#_1969");
const y1970 = document.querySelector("#_1970");
const y1971 = document.querySelector("#_1971");
const y1972 = document.querySelector("#_1972");
const y1973 = document.querySelector("#_1973");
const y1974 = document.querySelector("#_1974");
const y1975 = document.querySelector("#_1975");
const y1976 = document.querySelector("#_1976");
const y1977 = document.querySelector("#_1977");
const y1978 = document.querySelector("#_1978");
const y1979 = document.querySelector("#_1979");
const y1980 = document.querySelector("#_1980");

const ev1960 = document.querySelector("#event_1960");
const ev1961 = document.querySelector("#event_1961");
const ev1962 = document.querySelector("#event_1962");
const ev1963 = document.querySelector("#event_1963");
const ev1964 = document.querySelector("#event_1964");
const ev1965 = document.querySelector("#event_1965");
const ev1966 = document.querySelector("#event_1966");
const ev1967 = document.querySelector("#event_1967");
const ev1968 = document.querySelector("#event_1968");
const ev1969 = document.querySelector("#event_1969");
const ev1970 = document.querySelector("#event_1970");
const ev1971 = document.querySelector("#event_1971");
const ev1972 = document.querySelector("#event_1972");
const ev1973 = document.querySelector("#event_1973");
const ev1974 = document.querySelector("#event_1974");
const ev1975 = document.querySelector("#event_1975");
const ev1976 = document.querySelector("#event_1976");
const ev1977 = document.querySelector("#event_1977");
const ev1978 = document.querySelector("#event_1978");
const ev1979 = document.querySelector("#event_1979");
const ev1980 = document.querySelector("#event_1980");


let evGraphics = [ev1960, ev1961, ev1962, ev1963, ev1964, ev1965, ev1966, ev1967, ev1968, ev1969, ev1970, ev1971, ev1972, ev1973, ev1974, ev1975, ev1976, ev1977, ev1978, ev1979, ev1980];

let years = [y1960, y1961, y1962, y1963, y1964, y1965, y1966, y1967, y1968, y1969, y1970, y1971, y1972, y1973, y1974, y1975, y1976, y1977, y1978, y1979, y1980];
let yearHeading = [];
for (let i = 0; i <= 20; i++) {
    yearHeading.push(1960 + i);
}
let eventBody = ['', '', '', '', 'Rinderpest disease was eradicated', '', 'Migratory ungulates experienced a population boom', '', '', '', '', '', '', '', 'A steep rise was seen in the wildebeest population', '', 'Wildebeest population had reached an all-time high', '', 'Wildebeest population stabilized due to bottom-up regulation', '', ''];

const body10 = document.querySelector("#body_10");

const heading10 = document.querySelector("#heading_10");

const slider8 = document.querySelector("#slider8");

// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEET 10 slider - Population
for (let i = 0; i <= 20; i++) {
    years[i].style.display = 'none';
    evGraphics[i].style.display = 'none';
}

for (let i = 0; i <= 20; i++) {
    slider8.addEventListener('input', () => {
        if (slider8.value == i) {
            heading10.innerHTML = yearHeading[i];
            body10.innerHTML = eventBody[i];
            years[i].style.display = 'block';
            evGraphics[i].style.display = 'block';
            for (let j = 0; j <= 20; j++) {
                if (j > i) {
                    years[j].style.display = 'none';
                    evGraphics[j].style.display = 'none';
                }
            }
            for (let k = 0; k <= 20; k++) {
                if (k < i) {
                    years[k].style.display = 'none';
                    evGraphics[k].style.display = 'none';
                }
            }

        }
    })
}

// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEET8 sliders - Keystone effect of the wildebeest

const p8 = document.querySelector("#p8");
const head8 = document.querySelector("#head8");

let paraInner = ['By the late 1970s, scientists started noticing a reduction in the frequency of forest fires. When they mapped the fire data onto the wildebeest population graph, they discovered a direct correlation. What role did the wildebeest have in the reduction of fires? <br><br> Use the slider to understand the phenomenon.', 'Apart from facilitating an increase in the lion and hyena populations, the wildebeest also reduced the overall availability of short grass in the ecosystem. This was only possible due to such an enormous herd of migratory animals. This in turn meant that dry grass wasn’t available as much as before for fires to spread.', 'Fires usually cause devastating damage to the tree yearlings, which implies that new trees are unable to sprout following their natural course. It was because of the reduction of tree yearlings that scientists started to notice a reduction in the density of tree population.<br><br>The trees are an essential source of nutrition for megaherbivores such as giraffes and elephants. They also provide shelter for various rodents and birds. Once the tree population went up, the populations of giraffe and elephants also shot up.', 'This cascade of effects gave rise to an overall increase in the biodiversity of the community. More species were bound together, all indirectly depending on the wildebeest for their increased survival. This is when scientists understood that the wildebeest were the keystone species in the ecosystem.', 'An increase in the biodiversity of the ecosystem has also increased its stability and resilience against external disturbances. Hence the ecosystem has a greater chance of survival. The presence of a keystone species is one of the reasons the Serengeti has persisted over the millennia.'];

let headInner = ['Consequences of so many wildebeest', 'Direct Effects', 'Indirect Effects', 'Increased Biodiversity', 'Increased Stability & Resilience'];

const slider9 = document.querySelector("#slider9");

const cBasic = document.querySelector("#c_basic");
const cDirEffects = document.querySelector("#c_dir_effects");
const cIndirEffects = document.querySelector("#c_indir_effects");
const cBiodiversity = document.querySelector("#c_biodiversity");
const cStability = document.querySelector("#c_stability");

let communityEffects = [cBasic, cDirEffects, cIndirEffects, cBiodiversity, cStability];

for (let i = 1; i < communityEffects.length; i++) {
    communityEffects[i].style.display = 'none';
}

for (let i = 1; i <= 5; i++) {
    slider9.addEventListener('input', () => {
        if (slider9.value == i) {
            communityEffects[i - 1].style.display = 'block';
            p8.innerHTML = paraInner[i - 1];
            head8.innerHTML = headInner[i - 1];
            for (let j = 1; j <= 5; j++) {
                if (j > i) {
                    communityEffects[j - 1].style.display = 'none';
                }
            }
            for (let k = 0; k < communityEffects.length; k++) {
                if (k < i) {
                    communityEffects[k].style.display = 'block';
                }
            }
        }
    })
}


// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEETBEFORE 5 radio buttons - Movement patterns
const mov1 = document.querySelector("#mov_1");
const mov2 = document.querySelector("#mov_2");
const nat1 = document.querySelector("#nat_1");
const nat2 = document.querySelector("#nat_2");
const mov = document.querySelectorAll('input[name="mov"]');
const nat = document.querySelectorAll('input[name="nat"]');
const sSpc = document.querySelector("#s_spc");
const sNormal = document.querySelector("#s_normal");
const sMig = document.querySelector("#s_mig");
const sRes = document.querySelector("#s_res");
const objectClass = document.querySelectorAll(".mov_pat-1");


let radioButtonsMov = [];
for (let radioButton of mov) {
    radioButtonsMov.push(radioButton);
}

let radioButtonsNat = [];
for (let radioButton of nat) {
    radioButtonsNat.push(radioButton);
}

let m = false;
let r = false;
let c = false;
let h = false;

function allVarFalse() {
    m = false;
    r = false;
    c = false;
    h = false;
}

allVarFalse();

sMig.style.display = 'none';
sRes.style.display = 'none';

let carnColor = '#e54f3b';
let herbColor = '#ac9a30';
let neutralColor = '#f3d37f';


mov1.addEventListener('change', () => {
    if (mov1.checked == true) {
        m = true;
        r = false;
        sNormal.style.display = 'none';
        sMig.style.display = 'block';
        sRes.style.display = 'none';
        if (c == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'block';
            sRes.style.display = 'none';
            objectClass[0].style.fill = carnColor;
            objectClass[2].style.fill = carnColor;
            h = false;
            r = false;
        }
        if (h == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'block';
            sRes.style.display = 'none';
            objectClass[0].style.fill = herbColor;
            objectClass[2].style.fill = herbColor;
            r = false;
            c = false;
        }
    }
})
mov2.addEventListener('change', () => {
    if (mov2.checked == true) {
        r = true;
        m = false;
        sNormal.style.display = 'none';
        sMig.style.display = 'none';
        sRes.style.display = 'block';
        if (c == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'none';
            sRes.style.display = 'block';
            objectClass[0].style.fill = carnColor;
            objectClass[3].style.fill = carnColor;
            m = false;
            h = false;
        }
        if (h == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'none';
            sRes.style.display = 'block';
            objectClass[0].style.fill = herbColor;
            objectClass[3].style.fill = herbColor;
            m = false;
            c = false;
        }
    }
})
nat1.addEventListener('change', () => {
    if (nat1.checked == true) {
        c = true;
        h = false;
        sNormal.style.display = 'block';
        objectClass[0].style.fill = carnColor;
        objectClass[1].style.fill = carnColor;
        sMig.style.display = 'none';
        sRes.style.display = 'none';
        if (m == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'block';
            sRes.style.display = 'none';
            objectClass[0].style.fill = carnColor;
            objectClass[2].style.fill = carnColor;
            h = false;
            r = false;
        }
        if (r == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'none';
            sRes.style.display = 'block';
            objectClass[0].style.fill = carnColor;
            objectClass[3].style.fill = carnColor;
            m = false;
            h = false;
        }
    }
})
nat2.addEventListener('change', () => {
    if (nat2.checked == true) {
        h = true;
        c = false;
        sNormal.style.display = 'block';
        objectClass[0].style.fill = herbColor;
        objectClass[1].style.fill = herbColor;
        sMig.style.display = 'none';
        sRes.style.display = 'none';
        if (m == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'block';
            sRes.style.display = 'none';
            objectClass[0].style.fill = herbColor;
            objectClass[2].style.fill = herbColor;
            r = false;
            c = false;
        }
        if (r == true) {
            sNormal.style.display = 'none';
            sMig.style.display = 'none';
            sRes.style.display = 'block';
            objectClass[0].style.fill = herbColor;
            objectClass[3].style.fill = herbColor;
            m = false;
            c = false;
        }
    }
})

// --------------------------------------------------------------------------------------------------------------------------------------
// Code for SHEETBEFORE 9 hover interactions - An interesting community

const intL = document.querySelector("#sp_lion");
const intH = document.querySelector("#sp_hyena");
const intB = document.querySelector("#sp_buffalo");
const intZ = document.querySelector("#sp_zebra");
const intC = document.querySelector("#sp_cattle");
const intGi = document.querySelector("#sp_giraffe");
const intGa = document.querySelector("#sp_gazelle");
const intW = document.querySelector("#sp_wildebeest");
const intE = document.querySelector("#sp_elephant");

let intAnimals = [intL, intH, intB, intZ, intC, intGi, intGa, intW, intE];

const movL = document.querySelector("#mov_lion");
const movH = document.querySelector("#mov_hyena");
const movB = document.querySelector("#mov_buffalo");
const movZ = document.querySelector("#mov_zebra");
const movC = document.querySelector("#mov_cattle");
const movGi = document.querySelector("#mov_giraffe");
const movGa = document.querySelector("#mov_gazelle");
const movW = document.querySelector("#mov_wildebeest");
const movE = document.querySelector("#mov_elephant");

let intMov = [movL, movH, movB, movZ, movC, movGi, movGa, movW, movE];

for (let i = 0; i < intMov.length; i++) {
    intMov[i].style.display = 'none';
    intMov[i].style.pointerEvents = 'none';
}

for (let i = 0; i < intAnimals.length; i++) {
    intAnimals[i].addEventListener('mouseover', () => {
        intMov[i].style.display = 'block';
    })

    intAnimals[i].addEventListener('mouseout', () => {
        intMov[i].style.display = 'none';
    })
}