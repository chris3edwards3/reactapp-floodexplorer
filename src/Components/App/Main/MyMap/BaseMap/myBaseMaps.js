const myBaseMaps = {
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
};

export default myBaseMaps;