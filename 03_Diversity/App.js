// --------------------------------------------------------------------------------------------------------------------------------------
// Selection of variables from HTML

const community = document.querySelector('#community');
const biodiversity = community.getElementById('Biodiversity');
const lion = community.getElementById('lion');
const grass = community.getElementById('grass');
const highlightPanels = document.querySelectorAll('.highlight-panel');

const cls4 = document.querySelectorAll('.cls-4');


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
        .range(["#CC444E", "#67AA4B"]);

    // Size scale for animals
    const size = d3.scaleLinear()
        .domain([17, 100660])
        .range([7, 75])  // circle will be between 7 and 55 px wide



    // create a tooltip
    const toolTip = d3.select("#sketch1")
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
        .style("stroke-width", 1.5)
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


