if (L.Browser.mobile) {
    const overlay = document.getElementById("mobile");
    overlay.style.display = "block";
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        overlay.style.zIndex = "-1";
    });
    a.legend.options.position = "bottomleft";
    a.map.zoomOptions = null;
}     

createMap();

function createMap() {
    a.map.placed = L.map(a.map.div, a.map.options);
    if (a.map.zoomOptions) {
        L.control.zoom(a.map.zoomOptions).addTo(a.map.placed);
    }

    L.tileLayer(a.tiles.url, a.tiles.options).addTo(a.map.placed);

    getCensus();
}

function getCensus() {
    let censusPromises = [];

    for (let dataSet in a.censusData) {
        a.variables.push(dataSet);
        a.censusData[dataSet].censusResponse = fetch(a.censusData[dataSet].apiURL).then(function (r) {
            return r.json();
        });
        censusPromises.push(a.censusData[dataSet].censusResponse);
    }
    a.geometry = fetch(a.geojsons.counties).then(function (r) {
        return r.json();
    });
    censusPromises.push(a.geometry);
    
    Promise.all(censusPromises)
        .then(function (response) {
            for (let i = 0; i < a.variables.length; i++) {
                a.censusData[a.variables[i]].jsonData = response[i];
            }
            a.geometryData = response[10];
            
            a.selectedVar = "pop25";

            for (const m of a.geometryData.features) {
                let geoid = m.properties.GEOID;
                m.properties.census = [];

                a.variables.forEach((v) => {
                    for (let n of a.censusData[v].jsonData) {
                        let countyFips = n[2] + n[3];
                        if (geoid == countyFips) {
                            m.properties.census[v] = n[1];
                            break;
                        }
                    }
                });
                
                console.log(m);
            }

            // for (let n of a.censusData[a.selectedVar].jsonData) {
            //     const countyFips = n[2] + n[3];
            //     for (const m of a.geometryData.features) {
            //         const geoid = m.properties.GEOID;
            //         if (geoid == countyFips) {
            //             // if (n[0] == "Fayette County, Kentucky") {
            //             //     console.log(n);
            //             // }
            //             m.properties.census = {};
            //             m.properties.census.home = n[1];
            //             break;
            //         }
            //     }
            // }
            
            drawMap();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function drawMap() {
    a.layers.placed = L.geoJson(a.geometryData, {
        style: function (feature) {
            return a.map.styles.default;
        },
        onEachFeature: function (feature, layer) {
            layer.on("mouseover", function () {
                layer.setStyle(a.map.styles.mouseover).bringToFront();
            });
            layer.on("mouseout", function () {
                layer.setStyle(a.map.styles.mouseout);
            });
            layer.on("click", function() {
                console.log(feature);
                updateSideText(feature);
            })
        },
        filter: function (feature) {
            for (let i of a.censusData[a.selectedVar].jsonData) {
                if (feature.properties.STATEFP == i[2]) {
                    return true;
                }
            }
        },
    }).addTo(a.map.placed);

    a.map.placed.fitBounds(a.layers.placed.getBounds(), a.map.fitOptions);

    updateMap();
    addLegend();
    addUi();
    addSideText();
}

function updateMap() {
    getClassBreaks();
    const breaks = a.classes.breaks;

    a.layers.placed.eachLayer(function (layer) {
        const props = layer.feature.properties;
        if (props.census) {
            layer.setStyle({
                fillColor: a.legend.getColor(
                props.census[a.selectedVar],
                breaks,
                a.classes.number
                ),
            });
            let tooltipInfo = a.censusData[a.selectedVar].popupText(props["NAME"], props.census[a.selectedVar]);
            layer.bindTooltip(tooltipInfo, {
                // sticky: true,
            });
        } else {
            layer.setStyle({
                fillColor: "#ccc",
            });
            layer.bindTooltip("No data", {
                // sticky: true,
            });
        }
    });
    updateLegend();
}

function getClassBreaks() {
    const values = [];
    a.layers.placed.eachLayer(function (layer) {
        if (layer.feature.properties) {
            const props = layer.feature.properties;
            if (props.census) {
                values.push(Number(props.census[a.selectedVar]));
            }
        }
    });
    const cluster = ss.ckmeans(values, a.classes.number);
    const breaks = cluster.map(function (cluster) {
        return [cluster[0], cluster.pop()];
    });
    a.classes.breaks = breaks;
}

function addLegend() {
    const legendControl = L.control(a.legend.options);
    legendControl.onAdd = function () {
        const legend = L.DomUtil.get(a.legend.div);
        L.DomEvent.disableScrollPropagation(legend);
        L.DomEvent.disableClickPropagation(legend);
        return legend;
    };
    legendControl.addTo(a.map.placed);
}

function updateLegend() {
    const breaks = a.classes.breaks;
    legend.innerHTML = `<h5>${a.censusData[a.selectedVar].legendLabel}</h5>`;

    for (let i = 0; i <= breaks.length - 1; i++) {
        let color = a.legend.getColor(breaks[i][0], breaks, a.classes.number);
        const classLabel = a.legend.makePercent(
            breaks[i][0],
            breaks[i][1],
            color
        );
        legend.innerHTML += classLabel;
    }
}

function addUi() {
    a.buttons.dropdown.placed = document.querySelector(
        a.buttons.dropdown.select
    );
    a.buttons.dropdown.placed.innerHTML = "";
    for (let i = 0; i < a.variables.length; i++) {
        let option = document.createElement("option");
        option.textContent = a.censusData[a.variables[i]].legendLabel;
        option.value = a.variables[i];
        if (a.variables[i] == a.selectedVar) {
            option.selected = true;
        }
        a.buttons.dropdown.placed.appendChild(option);
    }
    const selectControl = L.control(a.buttons.dropdown.options);
    selectControl.onAdd = function () {
        return L.DomUtil.get(a.buttons.dropdown.id);
    };
    selectControl.addTo(a.map.placed);
    a.buttons.dropdown.placed.addEventListener("change", function (e) {
        a.selectedVar = e.target.value;
        console.log(a.selectedVar)
        // for (let n of a.censusData[a.selectedVar].jsonData) {
        //     const countyFips = n[2] + n[3];
        //     for (const m of a.geometryData.features) {
        //         const geoid = m.properties.GEOID;
        //         if (geoid == countyFips) {
        //             // if (n[0] == "Fayette County, Kentucky") {
        //             //     console.log(n);
        //             // }
        //             m.properties.census = {};
        //             m.properties.census.home = n[1];
        //             break;
        //         }
        //     }
        // }
        updateMap();
    });
}

function addSideText() {
    a.sideText.content = L.DomUtil.get(a.sideText.section);
}

function updateSideText(feature) {
    console.log(`Clicked on : ${feature}`)
    //a.sideText.content.innerHTML = `<p>Updated Stuff Stuff<p>`   
}