# Percentage of the US Populas Over the Age of 25 with Varying Levels of Education by County

## Data Source

1. Data Source: [Census Data API](https://api.census.gov/data/2020/acs/acs5/profile/variables.html)
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

## Topic and Geographic Phenomena this Map Explores

Topic: highschool diploma, associates, bachelors, and gradute/professional degrees. This was done by using the 2020 US Census Data and relevant variables. There are multiple selection options to see each variable as it's own choropleth. 

Wireframe during brainstorming:
![Wireframe Graphic](graphics/wireframe021824.jpg "Wireframe Graphic")

## Map Objectives and User Needs

### Q: Why did this map need to be made?
**A:** 
The US educational system typically establishes a path for children to become working members of society through primary, secondary, and specialist education.
Because of the traditional paths this system lays out, we can see where the majority of the US population ends up by the time they've completed the majority of their educational track.
From this we can layout predications as to what people under the age of 25 will end up in their later years.
This could lead to identifying areas that are undereducated, and as a result helping areas that could benefit from increases in education spending and efforts.
It could also lead to seeing which areas have high graduate or profesional education, which could be beneficial for employeers who are searching where to spend geo-targeted ads for specialist positions.

### Q: Why am I the one that designed it?
**A:** 
As the web manager for Gatton College ofo Business & Economics, understanding what areas of the US are looking for higher education, helps better the recruitment process and providing resources to those interested.
Additionally, my background gave me insight on what kind of information the College and University are analyzing.

### Q: What type of user do you expect to use this map and what needs do you anticipate they will have? 
**A:** 
Recruitment teams at colleges.
I anticipate that they will need both the % of people and the actual # of people that are in these categories.
As well, what % of those people are already part of the workforce.
The college and type of education (Engineering, Business, Medical, etc..) would be important factors in determing outreach to future students.  

## Technology stack

Format of data came from the Census Data API.
The county and state outlines came from GeoJSONs.
Processing of data happended through the internal scripts.

### JS and CSS Libraries included:
* Leaflet (for mapping and adding content to the page)
* Simple Statistics (for processing ranges for legends) 
* Bootstrap (for page formatting, styling, and responsiveness)
* Google Fonts (for fonts)