const a = {
    censusData: {
        pop25: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0059PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Population 25 years and over",
            popupText : "",
            sideMenuText : "",
        },
        gradeLess9: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0060PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Less than 9th grade",
            popupText : "",
            sideMenuText : "",
        },
        grade9to12: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0061PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "9th to 12th grade, no diploma",
            popupText : "",
            sideMenuText : "",
        },
        gradeHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0062PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate (includes equivalency)",
            popupText : "",
            sideMenuText : "",
        },
        gradeSomeCollege: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0063PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Some college, no degree",
            popupText : "",
            sideMenuText : "",
        },
        gradeAssociates: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0064PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Associate's degree",
            popupText : "",
            sideMenuText : "",
        },
        gradeBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0065PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree",
            popupText : "",
            sideMenuText : "",
        },
        gradeGradOrPro: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0066PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Graduate or professional degree",
            popupText : "",
            sideMenuText : "",
        },
        certHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0067PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate or higher",
            popupText : "",
            sideMenuText : "",
        },
        certBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0068PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree or higher",
            popupText : "",
            sideMenuText : "",
        }
    },
    variables : [],
    layers: {},    
    geojsons: {
        counties: "https://newmapsplus.github.io/assets/data/census2020/us-counties-100m.json",
    },
    geometryData : {},
    map: {
        div: "map",
        options: {
            zoomSnap: 1,
            zoomControl: false,
        },
        tooltip: function (name, a) {
            const tooltipInfo = `<b>${name} County </b></br>
                                 ${a}% of people over the age of 25 with a graduate or professional degree.`;
            return tooltipInfo;
        },
        styles: {
            default: {
                color: "#20282e",
                weight: 2,
                fillOpacity: 1,
                fillColor: "#1f78b4",
            },
            mouseover: {
                color: "#ff6e00",
            },
            mouseout: {
                color: "#20282e",
            },
        },
        fitOptions: {
            padding: [20, 20],
            animate: false,
        },
        zoomOptions: {
            position: "bottomright",
        },
    },
    tiles: {
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
    },
    buttons: {
        dropdown: {
            id: "dropdown-ui",
            select: "#dropdown-ui select",
            options: {
                position: "topright",
            },
        },
        locate: {
            id: "#geolocate-ui",
        },
    },
    legend: {
        div: "legend",
        colors: {
            5: ["#f1eef6", "#bdc9e1", "#74a9cf", "#2b8cbe", "#045a8d"],
            7: ['#ffffe0', '#b9e5dd', '#93c4d2', '#73a2c6', '#5681b9', '#3761ab', '#00429d']
        },
        makePercent: function (a, b, color) {
            const classLabel = `<div><span style ="background: ${color}"></span>
                                <label>${a} &mdash;
                                ${b}%</label></div>`;
            return classLabel;
        },
        options: {
            position: "topleft",
        },
        getColor: function (d, breaks, classes) {
            const colors = a.legend.colors[classes];
            for (let i = 0; i < classes; i++) {
                if (d <= breaks[i][1]) {
                    return colors[i];
                }
            }
        },
    },
    classes: {
        number: 7,
    },
};