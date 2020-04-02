const myLayerInfo = {
    "baseMap" : {
        "esriImagery": {
            "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg",
            "attLink": "https://services.arcgisonline.com/arcgis/rest/services",
            "attText": "Esri",
        },
        "esriStreet": {
            "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.jpg",
            "attLink": "https://services.arcgisonline.com/arcgis/rest/services",
            "attText": "Esri",
        },
        "esriTopo": {
            "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.jpg",
            "attLink": "https://services.arcgisonline.com/arcgis/rest/services",
            "attText": "Esri",
        },
        "osmStandard": {
            "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "attLink": "http://osm.org/copyright",
            "attText": "OpenStreetMap",
        },
    },
    "flood": {
        "comp5": {
            "url": "https://floods.ssec.wisc.edu/tiles/RIVER-FLDglobal-composite/{z}/{x}/{y}.png",
            "attLink": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
            "attText": "NOAA JPSS GOES-R CIMSS GMU",
            "position": [10, 0],
            "zoom": 3,
        },
        "comp1": {
            "url": "https://floods.ssec.wisc.edu/tiles/RIVER-FLDglobal-composite1/{z}/{x}/{y}.png",
            "attLink": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
            "attText": "NOAA JPSS GOES-R CIMSS GMU",
            "position": [10, 0],
            "zoom": 3,
        },
        "jointABI": {
            "url": "https://floods.ssec.wisc.edu/tiles/RIVER-FLD-joint-ABI/{z}/{x}/{y}.png",
            "attLink": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
            "attText": "NOAA JPSS GOES-R CIMSS GMU",
            "position": [0, -75],
            "zoom": 4,
        },
        "jointAHI": {
            "url": "https://floods.ssec.wisc.edu/tiles/RIVER-FLD-joint-AHI/{z}/{x}/{y}.png",
            "attLink": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
            "attText": "NOAA JPSS GOES-R CIMSS GMU",
            "position": [0, 134],
            "zoom": 4,
        },
    },
    "extra": {
        "pop": {
            "url": "https://tiles.arcgis.com/tiles/VAI453sU9tG9rSmh/arcgis/rest/services/Population_Density_2015_tiles/MapServer/WMTS/tile/1.0.0/Population_Density_2015_tiles/default/default028mm/{z}/{y}/{x}.png",
            "attLink": "https://tiles.arcgis.com/tiles/VAI453sU9tG9rSmh/arcgis/rest/services/Population_Density_2015_tiles/MapServer?f=html&cacheKey=8754492dd1565e0c",
            // "attText": "CIESIN",
            "attText": "CIESIN Gridded Population of the World v4",
            "position": [10, 0],
            "zoom": 3,
        },
    },
};

export default myLayerInfo;