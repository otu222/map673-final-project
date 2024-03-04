# PLEASE NOTE
for some reason the markdown viewer is showing me the correct render for this file in vscode, but the gitub readme viewer has missing parts that are inconsistent (i.e. i'll move one thing and then another thing will disappear).

## 1. Data source

1. Anticipated Data Source: [Census Data API](https://api.census.gov/data/2020/acs/acs5/profile/variables.html)
2. Data Sets:
    * [Population 25 years and over](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0059PE.json)
    * [Less than 9th grade](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0060PE.json)
    * [9th to 12th grade, no diploma](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0061PE.json)
    * [High school graduate (includes equivalency)](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0062PE.json)
    * [Some college, no degree](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0063PE.json)
    * [Associate's degree](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0064PE.json)
    * [Bachelor's degree](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0065PE.json)
    * [Graduate or professional degree](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0066PE.json)
    * [High school graduate or higher](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0067PE.json)
    * [Bachelor's degree or higher](https://api.census.gov/data/2020/acs/acs5/profile/variables/DP02_0068PE.json)

All of these sources are listed as % but some were large values more akin to # of people than actual % of population.
Might have to process or exclude some of these datasets from the final project.

## 2. Topic and geographic phenomena your map will explore

1. Title: **"Percentage of the US Populas Over the Age of 25 with Varying Levels of Education by County"**

2. Topic: highschool diploma, associates, bachelors, and gradute/professional degrees. This will be done by using the 2020 US Census Data and relevant variables. The hope is to do all of US counties, but special focus may be put on Kentucky and it's neighboring states as these could have higher areas of interest for KY Universities based off proxiomity. There will be multiple selection options to see each variable as it's own choropleth. Also, additional processing methods will show differences between levels of education in a county (i.e. does a county have a high % of people without a highschool diploma and a high % of people with a graduate/professional degree?) Popups will provide more in-depth information for a given county.

3. The UI will have a standard outline of a map on the left that spans 60-75% of the width of the page and the rest being a section for text content.
The title of the map and a selector dropdown field will be on the top on the page.
The selector will offer different options that will update the map, legend, and side text once the user selects an option.
The options will include the different variables chosen from the US Census API and any processed comparsions between the variables.
The sidetext will include information about the dataset(s) and author information for the map.

![Wireframe Graphic](graphics/wireframe021824.jpg "Wireframe Graphic")

## 3. Map objectives and user needs

### Q: Why does the map need to be made?
**A:** 
The US educational system typically establishes a path for children to become working members of society through primary, secondary, and specialist education.
Because of the traditional paths this system lays out, we can see where the majority of the US population ends up by the time they've completed the majority of their educational track.
From this we can layout predications as to what people under the age of 25 will end up in their later years.
This could lead to identifying areas that are undereducated, and as a result helping areas that could benefit from increases in education spending and efforts.
It could also lead to seeing which areas have high graduate or profesional education, which could be beneficial for employeers who are searching where to spend geo-targeted ads for specialist positions.

### Q: Why am I the one to be designing it?
**A:** 
As the web manager for Gatton College ofo Business & Economics, understanding what areas of the US are looking for higher education, can help better the recruitment process and providing resources to those interested.
Additionally, my background gives me insight on what kind of information the College and University are analyzing.

### Q: What type of user do you expect to use this map and what needs do you anticipate they will have? 
**A:** 
Recruitment teams at colleges.
I anticipate that they will need both the % of people and the actual # of people that are in these categories.
As well, what % of those people are already part of the workforce.
The college and type of education (Engineering, Business, Medical, etc..) would be important factors in determing outreach to future students.  

## 4. Anticipating your technology stack

Format of data will come from the Census Data API.
The county and state outlines will come from GeoJSONs.
There may be some CSVs included depending on if other data sources are included.
Processing of data will most likely be done only through the app.js script or within the index.html.
Other sources may be used depending on neccesity to process datasets before then.

### JS Libraries will include:
* Leaflet (for mapping and adding content to the page)
* Omnivore/Papa Parse (if CSV's become included)
* Simple Statistics (for processing ranges for legends) 
* Bootstrap (for page formatting, styling, and responsiveness)

