// Selection of variables from HTML
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

let months = [month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12]

let slider3 = document.querySelector("#slider3");
let sketch3 = document.querySelector("#sketch3");

let cls4 = document.querySelectorAll(".cls-4");

const svgOn1 = document.querySelector("#svg_on_1");
const svgOn2 = document.querySelector("#svg_on_2");
const svgOn3 = document.querySelector("#svg_on_3");
// const titleLabel = document.querySelector("#title_label");
let slider2 = document.querySelector("#slider2");

let svgForSlider3 = [svgOn1, svgOn2, svgOn3];
let allLabels = ['Distribution of Zones', 'The Climatic Gradient', 'Variation in Habitats'];



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for slider1

// cls4.style.stroke = 'rgba(0, 0, 0, 0.25)'

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



// Code for slider2

svgForSlider3[0].style.display = 'block';
svgForSlider3[1].style.display = 'none';
svgForSlider3[2].style.display = 'none';

slider2.addEventListener('input', () => {
    for (let i = 1; i <= 3; i++) {
        if (slider2.value == i) {
            svgForSlider3[i - 1].style.display = 'block';
            // titleLabel.innerHTML = allLabels[i - 1];
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


// Code for slider3
for (let i = 2; i <= 12; i++) {
    months[i - 1].style.display = 'none';
}

slider3.addEventListener('input', () => {
    for (let i = 1; i <= 12; i++) {
        if (slider3.value == i) {
            months[i - 1].style.display = 'block';
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

// slider3.addEventListener('input', () => {
//     if (slider3.value == 1) {
//         month1.style.display = 'block';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 2) {
//         month2.style.display = 'block';
//         month1.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//         // for (let i = 2; i <= 12; i++) {
//         //     if (slider3.value == i) {
//         //         sketch3.style.backgroundImage = `url(00Images/01_vegChange/0${i}.jpg)`;
//         //         sketch3.style.transition = 'all ease-in 0.25s';
//         //     }
//         // }
//     } else if (slider3.value == 3) {
//         month3.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 4) {
//         month4.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 5) {
//         month5.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 6) {
//         month6.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 7) {
//         month7.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 8) {
//         month8.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 9) {
//         month9.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 10) {
//         month10.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month11.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 11) {
//         month11.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month12.style.display = 'none';
//     } else if (slider3.value == 12) {
//         month12.style.display = 'block';
//         month1.style.display = 'none';
//         month2.style.display = 'none';
//         month3.style.display = 'none';
//         month4.style.display = 'none';
//         month5.style.display = 'none';
//         month6.style.display = 'none';
//         month7.style.display = 'none';
//         month8.style.display = 'none';
//         month9.style.display = 'none';
//         month10.style.display = 'none';
//         month11.style.display = 'none';
//     }
// })



// --------------------------------------------------------------------------------------------------------------------------------------