// --------------------------------------------------------------------------------------------------------------------------------------
// Selection of variables from HTML

const community = document.querySelector('#community');
const biodiversity = community.getElementById('Biodiversity');
const lion = community.getElementById('lion');
const grass = community.getElementById('grass');
const highlightPanels = document.querySelectorAll('.highlight-panel');

const cls4 = document.querySelectorAll('.cls-4');

// Mapping of animals in the diagram
// 0 = grass
// 1 = lion
// 2 = buffalo
// 3 = zebra
// 4 = wildebeest
// 5 = th gazelle
// 6 = giraffe
// 7 = elephant
// 8 = hyena
// 9 = Tree



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for redefining color of circles

for (let i = 0; i <= 9; i++) {
    cls4[i].style.opacity = '0.15';
    cls4[i].style.fill = '#FFD639';
}



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for creation of dialogue boxes


// highlightPanel.innerHTML = 'grass';
// highlightPanel.style.boxSizing = 'border-box';
// highlightPanel.style.width = '150px';
// highlightPanel.style.height = '100px';
// highlightPanel.style.fontFamily = 'Merriweather';
// highlightPanel.style.border = '1px solid rgba(145, 145, 145, 0.2)';
// highlightPanel.style.boxShadow = '0 0 10px 0.5px rgba(0, 0, 0, .15)';
// highlightPanel.style.backgroundColor = 'rgb(240, 240, 240)';
// highlightPanel.style.borderRadius = '20px';
// highlightPanel.style.backdropFilter = 'blur(2.5px)';
// highlightPanel.style.transition = 'all 0.4s';

// highlightPanel.classList.add('');



// --------------------------------------------------------------------------------------------------------------------------------------
// Code for highlight interactions (SPECIES)

for (let i = 0; i <= 9; i++) {

    cls4[i].addEventListener('mouseover', function (event) {
        event.target.style.opacity = '1';
        event.target.style.transition = '0.5s';
        highlightPanels[i].style.display = 'flex';
        highlightPanels[i].style.flexDirection = 'row';
        highlightPanels[i].style.flexWrap = 'wrap';
        highlightPanels[i].style.justifyContent = 'space-between';
        highlightPanels[i].style.alignItems = 'center';
        highlightPanels[i].style.transition = '0.5s';
    })

    cls4[i].addEventListener('mouseout', function (event) {
        event.target.style.opacity = '0.15';
        event.target.style.transition = '0.5s';
        highlightPanels[i].style.display = 'none';
    })

}




