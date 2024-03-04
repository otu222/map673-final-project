const a = {
    censusData: {
        pop25: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0059PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Population 25 years and over",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p>Population at or over the age of 25: <b class="text-primary">${((Number)(a)).toLocaleString()}</b></p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Population at or over the age of 25</td>
                    <td>${((Number)(value)).toLocaleString()}</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeLess9: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0060PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Less than 9th grade",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25<br/>with less than a 9th grade education.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Less than a 9th grade education</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        grade9to12: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0061PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "9th to 12th grade, no diploma",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with a 9th to 12th grade education, but no diploma.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>9th to 12th grade education, but no diploma</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0062PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate (includes equivalency)",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with a High School Graduate diploma<br/>(includes equivalency).</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>High School Graduate diploma (includes equivalency)</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeSomeCollege: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0063PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Some college, no degree",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with some college but no degree.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Some college but no degree</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeAssociates: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0064PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Associate's degree",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with an Associate's degree.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Associate's degree</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0065PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with a Bachelor's degree.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Bachelor's degree</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeGradOrPro: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0066PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Graduate or professional degree",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>with a Graduate or Professional degree.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Graduate or Professional degree</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        certHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0067PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate or higher",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>that are a High school graduate or higher.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>High school graduate or higher</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        certBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0068PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree or higher",
            popupText : function (name, state, a) {
                const tooltipInfo = 
                `<h3><b>${name} County, ${state} </b><h3>
                <p><b class="text-primary">${a}%</b> of people at or over the age of 25 <br/>that are a Bachelor's degree or higher.</p>`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Bachelor's degree or higher</td>
                    <td>${((Number)(value)).toLocaleString()}%</td>
                </tr>`;
                return tableRowInfo;
            },
        }
    },
    variables : [],
    layers: {},    
    geojsons: {
        counties: "https://newmapsplus.github.io/assets/data/census2020/us-counties-100m.json",
        statelines: "data/us_states_6-precision_20m.geojson"
    },
    geometryData : {},
    stateCodes : {
        "01":"Alabama",
        "02":"Alaska",
        "04":"Arizona",
        "05":"Arkansas",
        "06":"California",
        "08":"Colorado",
        "09":"Connecticut",
        "10":"Delaware",
        "11":"District Of Columbia",
        "12":"Florida",
        "13":"Georgia",
        "15":"Hawaii",
        "16":"Idaho",
        "17":"Illinois",
        "18":"Indiana",
        "19":"Iowa",
        "20":"Kansas",
        "21":"Kentucky",
        "22":"Louisiana",
        "23":"Maine",
        "24":"Maryland",
        "25":"Massachusetts",
        "26":"Michigan",
        "27":"Minnesota",
        "28":"Mississippi",
        "29":"Missouri",
        '30':"Montana",
        "31":"Nebraska",
        "32":"Nevada",
        "33":"New Hampshire",
        "34":"New Jersey",
        "35":"New Mexico",
        "36":"New York",
        "37":"North Carolina",
        "38":"North Dakota",
        "39":"Ohio",
        "40":"Oklahoma",
        "41":"Oregon",
        "42":"Pennsylvania",
        "44":"Rhode Island",
        "45":"South Carolina",
        "46":"South Dakota",
        "47":"Tennessee",
        "48":"Texas",
        "49":"Utah",
        "50":"Vermont",
        "51":"Virginia",
        "53":"Washington",
        "54":"West Virginia",
        "55":"Wisconsin",
        "56":"Wyoming",
        "72":"Puerto Rico",
        "78":"Virgin Islands",
    },
    map: {
        div: "map",
        options: {
            center: [40, -100],
            zoom: 6,
            zoomSnap: 1,
            zoomControl: false,
        },
        styles: {
            default: {
                color: "#20282e",
                weight: 1.5,
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
        makePercent: function (a, b, color, v) {
            var classLabel = ``;
            if ( v == "pop25" ) {
                classLabel = `<div><span style ="background: ${color}"></span>
                                <label>${a.toLocaleString()} &mdash;
                                ${b.toLocaleString()}</label></div>`;
            }
            else {
                classLabel = `<div><span style ="background: ${color}"></span>
                                <label>${a} &mdash;
                                ${b}%</label></div>`;
            }
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
    sideText: {
        section: "sideText-Stuff",
        content: ``,
    },
    classes: {
        number: 7,
    },
};