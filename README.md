## React App - Flood Explorer

https://chris3edwards3.github.io/reactapp-floodexplorer/

The purpose of this application is to show various satellite-based flood maps created as part of the [NOAA LEO/GEO Flood Mapping Product](https://www.ssec.wisc.edu/flood-map-demo/). Additional layers, such as population density, provide context to the flood maps.

### Libraries
In addition to React, this application uses [Leaflet](https://leafletjs.com/) (an open-source JavaScript library for interactive maps). The [react-leaflet](https://react-leaflet.js.org/) library was also used to more easily create Leaflet components in React. Lastly, I used the gh-pages library to deploy this project to github.

### Components
The structure of the app is as follows. The App component has a Footer and a Main component. The Footer has several help icons. The Main component has a Sidebar and a Map. The Sidebar has a Title component and a Layer Control component. The Layer Control has the check-boxes, drop-downs, and sliders that control the visibility settings. The Map has different layers as well as legends.

### Structure
Most of the components are functional components. The state is stored in the Main component, because the Sidebar and the Map need to have access to the state variables. Initially, this was built as a class-based component, but I changed it to use the useState hook. The other components that are class-based are the legends. The layout was generated using flex box, and each component has its own style sheet.

### Scaffold & Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was deployed using npm and the gh-pages library, as described in this [article](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f).

## Layer Information and Citations

#### Flood Layers
The [NOAA LEO/GEO Flood Mapping Product](https://www.ssec.wisc.edu/flood-map-demo/flood-products/) is created in partnership with JPSS, George Mason University, and the Cooperative Institute for Meteorological Satellite Studies. For each layer type, the most recent flood map produced is shown.

* VIIRS Composite: The composite products provide the best image after filtering out cloud cover. The maximum flood extent in the given time period is shown (5-days or 1-day).
* Joint VIIRS/ABI: The ABI maps are more frequent but of a coarser resolution, and they only cover the Americas. This joint layer shows VIIRS wherever possible, but then fills in the gaps with ABI.
* Joint VIIRS/AHI: The AHI is similar to ABI, but covering East Asia and Australasia. It is still experimental and has not been completely validated

#### Additional Layers
* Gridded Population of the World
* Global Flood Hazard Frequency and Distribution: based on extreme flood events between 1985 and 2003
* Global Flood Total Economic Loss Risk: based on spatially allocated Gross Domestic Product (GDP)
* Global Flood Proportional Economic Loss Risk: based on GDP weighted by hazard frequency and distribution

Citations
* Center for International Earth Science Information Network - CIESIN - Columbia University. 2018. Gridded Population of the World, Version 4 (GPWv4): Population Density, Revision 11. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H49C6VHW. Accessed 13 April 2020.
* Center for Hazards and Risk Research - CHRR - Columbia University, and Center for International Earth Science Information Network - CIESIN - Columbia University. 2005. Global Flood Hazard Frequency and Distribution. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H4668B3D. Accessed 13 April 2020.
* Center for Hazards and Risk Research - CHRR - Columbia University, Center for International Earth Science Information Network - CIESIN - Columbia University, and International Bank for Reconstruction and Development - The World Bank. 2005. Global Flood Total Economic Loss Risk Deciles. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H4T151KP. Accessed 13 April 2020.
* Center for Hazards and Risk Research - CHRR - Columbia University, Center for International Earth Science Information Network - CIESIN - Columbia University, and International Bank for Reconstruction and Development - The World Bank. 2005. Global Flood Proportional Economic Loss Risk Deciles. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H4XS5S9Q. Accessed 13 April 2020.
* Dilley, M., R.S. Chen, U. Deichmann, A.L. Lerner-Lam, M. Arnold, J. Agwe, P. Buys, O. Kjekstad, B. Lyon, and G. Yetman. 2005. Natural Disaster Hotspots: A Global Risk Analysis. Washington, D.C.: World Bank. https://doi.org/10.1596/0-8213-5930-4

####Base Maps
[Esri - ArcGIS REST Services](https://services.arcgisonline.com/arcgis/rest/services)
* Imagery Sources: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community
* Street Sources: Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, (c) OpenStreetMap contributors, and the GIS User Community
* Topographic Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community
Open Street Map

[Open Street Map](https://www.openstreetmap.org/copyright)