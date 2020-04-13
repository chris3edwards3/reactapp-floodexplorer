import React from "react";

let messageText = {
    additional:
        <div>
            <h3>Additional Layers</h3>
            <ul>
                <li>Gridded Population of the World</li>
                <li>Global Flood Hazard Frequency and Distribution: based on extreme flood events between 1985 and 2003</li>
                <li>Global Flood Total Economic Loss Risk: based on spatially allocated Gross Domestic Product (GDP)</li>
                <li>Global Flood Proportional Economic Loss Risk: based on GDP weighted by hazard frequency and distribution</li>
            </ul>
            <h3>Citations</h3>
            <ul className="citations">
                <li>Center for International Earth Science Information Network - CIESIN - Columbia University. 2018. Gridded Population of the World, Version 4 (GPWv4): Population Density, Revision 11. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). <a href="https://doi.org/10.7927/H49C6VHW" target="_blank" rel="noopener noreferrer">https://doi.org/10.7927/H49C6VHW</a>. Accessed 13 April 2020.</li>
                <li>Center for Hazards and Risk Research - CHRR - Columbia University, and Center for International Earth Science Information Network - CIESIN - Columbia University. 2005. Global Flood Hazard Frequency and Distribution. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). <a href="https://doi.org/10.7927/H4668B3D" target="_blank" rel="noopener noreferrer">https://doi.org/10.7927/H4668B3D</a>. Accessed 13 April 2020.</li>
                <li>Center for Hazards and Risk Research - CHRR - Columbia University, Center for International Earth Science Information Network - CIESIN - Columbia University, and International Bank for Reconstruction and Development - The World Bank. 2005. Global Flood Total Economic Loss Risk Deciles. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). <a href="https://doi.org/10.7927/H4T151KP" target="_blank" rel="noopener noreferrer">https://doi.org/10.7927/H4T151KP</a>. Accessed 13 April 2020.</li>
                <li>Center for Hazards and Risk Research - CHRR - Columbia University, Center for International Earth Science Information Network - CIESIN - Columbia University, and International Bank for Reconstruction and Development - The World Bank. 2005. Global Flood Proportional Economic Loss Risk Deciles. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). <a href="https://doi.org/10.7927/H4XS5S9Q" target="_blank" rel="noopener noreferrer">https://doi.org/10.7927/H4XS5S9Q</a>. Accessed 13 April 2020.</li>
                <li>Dilley, M., R.S. Chen, U. Deichmann, A.L. Lerner-Lam, M. Arnold, J. Agwe, P. Buys, O. Kjekstad, B. Lyon, and G. Yetman. 2005. Natural Disaster Hotspots: A Global Risk Analysis. Washington, D.C.: World Bank. <a href="https://doi.org/10.1596/0-8213-5930-4" target="_blank" rel="noopener noreferrer">https://doi.org/10.1596/0-8213-5930-4</a></li>
            </ul>
        </div>,
    baseMap:
        <div>
            <h3>Base Maps</h3>
            <p>Esri</p>
            <ul>
                <li><a href="https://services.arcgisonline.com/arcgis/rest/services"
                       target="_blank"
                       rel="noopener noreferrer">ArcGIS REST Services</a></li>
                <li>Imagery Sources: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community</li>
                <li>Street Sources: Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, (c) OpenStreetMap contributors, and the GIS User Community</li>
                <li>Topographic Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community</li>
            </ul>
            <p>Open Street Map</p>
            <ul>
                <li><a href="https://www.openstreetmap.org/copyright"
                       target="_blank"
                       rel="noopener noreferrer">OSM Copyright and License</a></li>
            </ul>
        </div>,
    flood:
        <div>
            <h3>Flood Layers</h3>
            <p>
                The <a href="https://www.ssec.wisc.edu/flood-map-demo/"
                       target="_blank"
                       rel="noopener noreferrer"> NOAA LEO/GEO Flood Mapping Product</a> is created in partnership
                with JPSS, George Mason University, and the Cooperative Institute for Meteorological Satellite
                Studies. For each layer type, the most recent flood map produced is shown.
            </p>
            <ul>
                <li>VIIRS Composite: The composite products provide the best image after filtering out cloud cover. The maximum flood extent in the given time period is shown (5-days or 1-day). </li>
                <li>Joint VIIRS/ABI: The ABI maps are more frequent but of a coarser resolution, and they only cover the Americas. This joint layer shows VIIRS wherever possible, but then fills in the gaps with ABI.</li>
                <li>Joint VIIRS/AHI: The AHI is similar to ABI, but covering East Asia and Australasia. It is still experimental and has not been completely validated.</li>
            </ul>

            <h3>Legend Explanation</h3>
            <ul>
                <li>MS: missing data (transparent)</li>
                <li>LD: clear-sky land (brown)</li>
                <li>SI: supra-snow/ice water or mixed ice & water (purple)</li>
                <li>SN: snow cover (white)</li>
                <li>IC: river/lake ice cover (cyan)</li>
                <li>CL: cloud cover (grey)</li>
                <li>CS: cloud shadow and terrain shadow (drak grey)</li>
                <li>WA: open water (blue)</li>
                <li>0-100: floodwater fractions - the amount of each pixel that is inundated (light cyan to red)</li>
            </ul>
        </div>,
    question:
        <div>
            <h3>About this Web App</h3>
            <p>The map can show 3 layers at one time: the base map, one flood layer, and one additional layer.</p>
            <p>Visualization Options:</p>
            <ul>
                <li>The user can turn the flood and additional layers on and off by clicking the check boxes.</li>
                <li>The user may change the visible layer by clicking the drop-down and selecting the new layer.</li>
                <li>The layer transparency may also be changed by adjusting the slider.</li>
            </ul>
            <p>Additional icons give information about each layer group and an explanation of the flood legend.</p>
        </div>,
};

export default messageText;