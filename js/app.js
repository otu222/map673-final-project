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
// console.log(a);

function createMap() {
    a.map.placed = L.map(a.map.div, a.map.options);
    if (a.map.zoomOptions) {
        L.control.zoom(a.map.zoomOptions).addTo(a.map.placed);
    }

    L.tileLayer(a.tiles.url, a.tiles.options).addTo(a.map.placed);
    getCensus();
}

function getCensus() {
    // this function pulls the data through an API request.
    // need to do this with the rest of the datas (total 10 data)

    // new function
    a.allCensusAPIs.population25 = fetch(a.censusURLs.population25).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeLessThan9th = fetch(a.censusURLs.gradeLessThan9th).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.grade9thto12th = fetch(a.censusURLs.grade9thto12th).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeHighSchoolGrad = fetch(a.censusURLs.gradeHighSchoolGrad).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeSomeCollegeNoDegree = fetch(a.censusURLs.gradeSomeCollegeNoDegree).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeAssociates = fetch(a.censusURLs.gradeAssociates).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeBachelors = fetch(a.censusURLs.gradeBachelors).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.gradeGradOrPro = fetch(a.censusURLs.gradeGradOrPro).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.certHighSchoolGrad = fetch(a.censusURLs.certHighSchoolGrad).then(function (r) {
        return r.json();
    });
    a.allCensusAPIs.certBachelors = fetch(a.censusURLs.certBachelors).then(function (r) {
        return r.json();
    });
    a.geometry = fetch(a.geojsons.counties).then(function (r) {
        return r.json();
    });

    Promise.all([
        a.allCensusAPIs.population25,
        a.allCensusAPIs.gradeLessThan9th,
        a.allCensusAPIs.grade9thto12th,
        a.allCensusAPIs.gradeHighSchoolGrad,
        a.allCensusAPIs.gradeSomeCollegeNoDegree,
        a.allCensusAPIs.gradeAssociates,
        a.allCensusAPIs.gradeBachelors,
        a.allCensusAPIs.gradeGradOrPro,
        a.allCensusAPIs.certHighSchoolGrad,
        a.allCensusAPIs.certBachelors,
        a.geometry
    ])
        .then(function (response) {
            a.data.pop25 = response[0];
            a.data.lessThan9th = response[1];
            a.data.grade9to12 = response[2];
            a.data.gradeHSGrad = response[3];
            a.data.gradeSomeCollege = response[4];
            a.data.gradeAssociates = response[5];
            a.data.gradeBachelors = response[6];
            a.data.gradeGradOrPro = response[7];
            a.data.certHSGrad = response[8];
            a.data.certBachelors = response[9];
            a.data.geometryData = response[10];
            console.log(a.data)

            for (let n of a.data.pop25) {
                const countyFips = n[2] + n[3];
                for (const m of a.data.geometryData.features) {
                const geoid = m.properties.GEOID;
                if (geoid == countyFips) {
                    // if (n[0] == "Fayette County, Kentucky") {
                    // console.log(n);
                    // }
                    m.properties.census = {};
                    m.properties.census.home = n[1];
                    break;
                }
                }
            }
            drawMap();
        })
        .catch(function (error) {
            console.log(error);
        });

    // old function as template
    // a.censusAPI = fetch(a.censusURLs.certBachelors).then(function (r) {
    //     return r.json();
    // });
    // a.geometry = fetch(a.geojsons.counties).then(function (r) {
    //     return r.json();
    // });
    // Promise.all([a.censusAPI, a.geometry])
    //     .then(function (response) {
    //         a.data.censusData = response[0];
    //         a.data.geometryData = response[1];
    //         for (let n of a.data.censusData) {
    //             const countyFips = n[2] + n[3];
    //             for (const m of a.data.geometryData.features) {
    //             const geoid = m.properties.GEOID;
    //             if (geoid == countyFips) {
    //                 // if (n[0] == "Fayette County, Kentucky") {
    //                 // console.log(n);
    //                 // }
    //                 m.properties.census = {};
    //                 m.properties.census.home = n[1];
    //                 break;
    //             }
    //             }
    //         }
    //         drawMap();
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

function drawMap() {
    a.layers.placed = L.geoJson(a.data.geometryData, {
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
        },
        filter: function (feature) {
        for (let i of a.data.censusData) {
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
}

function updateMap() {
    getClassBreaks();
    const breaks = a.classes.breaks;
    a.layers.placed.eachLayer(function (layer) {
        const props = layer.feature.properties;
        if (props.census) {
        layer.setStyle({
            fillColor: a.legend.getColor(
            props.census.home,
            breaks,
            a.classes.number
            ),
        });
        let tooltipInfo = a.map.tooltip(props["NAME"], props.census.home);
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
            values.push(Number(props.census.home));
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
    // console.log(a.censusVar)
    legend.innerHTML = `<h5>${a.censusVar}</h5>`;

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
    console.log("Stuff")
    a.buttons.dropdown.placed = document.querySelector(
        a.buttons.dropdown.select
    );
    a.buttons.dropdown.placed.innerHTML = "";
    for (let i = 1; i < a.variables.length; i++) {
        let option = document.createElement("option");
        option.textContent = a.variables[i].label;
        option.value = a.variables[i].name;
        if (a.variables[i].name == a.vars.aV) {
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
        a.vars.aV = e.target.value;
        updateMap();
    });
}