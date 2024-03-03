const a = {
    censusData: {
        pop25: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0059PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Population 25 years and over",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     Population at or over the age of 25: ${a}`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Population at or over the age of 25</td>
                    <td>${value}</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeLess9: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0060PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Less than 9th grade",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with less than a 9th grade education.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Less than a 9th grade education</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        grade9to12: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0061PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "9th to 12th grade, no diploma",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with a 9th to 12th grade education, but no diploma.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>9th to 12th grade education, but no diploma</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0062PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate (includes equivalency)",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with a High School Graduate diploma (includes equivalency).`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>High School Graduate diploma (includes equivalency)</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeSomeCollege: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0063PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Some college, no degree",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with some college but no degree.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Some college but no degree</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeAssociates: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0064PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Associate's degree",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with an Associate's degree.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Associate's degree</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0065PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with a Bachelor's degree.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Bachelor's degree</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        gradeGradOrPro: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0066PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Graduate or professional degree",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 with a Graduate or Professional degree.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Graduate or Professional degree</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        certHSGrad: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0067PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "High school graduate or higher",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 that are a High school graduate or higher.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>High school graduate or higher</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        },
        certBachelors: {
            apiURL : "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME,DP02_0068PE&for=county:*&in=state:*",
            censusResponse : {},
            jsonData : {},
            legendLabel : "Bachelor's degree or higher",
            popupText : function (name, a) {
                const tooltipInfo = `<b>${name} County </b></br>
                                     ${a}% of people at or over the age of 25 that are a Bachelor's degree or higher.`;
                return tooltipInfo;
            },
            sideMenuText : function (value) {
                const tableRowInfo = 
                `<tr>
                    <td>Bachelor's degree or higher</td>
                    <td>${value}%</td>
                </tr>`;
                return tableRowInfo;
            },
        }
    },
    variables : [],
    layers: {},    
    geojsons: {
        counties: "https://newmapsplus.github.io/assets/data/census2020/us-counties-100m.json",
        statelines: "us_states_6-precision_20m.geojson"
    },
    geometryData : {},
    map: {
        div: "map",
        options: {
            center: [40, -100],
            zoom: 6,
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
    sideText: {
        section: "sideText-Stuff",
        content: ``,
    },
    classes: {
        number: 7,
    },
};