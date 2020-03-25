import React from 'react';
import './MyMap.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
require('leaflet');

function MyMap() {
    const position = [0, 0];

    return (
        <div id="MyMap">
            <Map center={position} zoom={3}>
                {/*<Map center={position} zoom={this.state.zoom}>*/}
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // attribution='&amp;copy <a href="https://services.arcgisonline.com">Esri</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.jpg"
                />
                {/*<TileLayer*/}
                {/*    attribution='&amp;copy <a href="https://tiles.arcgis.com/tiles/VAI453sU9tG9rSmh/arcgis/rest/services/Population_Density_2015_tiles/MapServer?f=html&cacheKey=8754492dd1565e0c">CIESIN Gridded Population of the World v4</a>'*/}
                {/*    // url="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/GPW_Population_Density_2020/default/1km/{z}/{y}/{x}.png"*/}
                {/*    url="https://tiles.arcgis.com/tiles/VAI453sU9tG9rSmh/arcgis/rest/services/Population_Density_2015_tiles/MapServer/WMTS/tile/1.0.0/Population_Density_2015_tiles/default/default028mm/{z}/{y}/{x}.png"*/}
                {/*    opacity="1.0"*/}
                {/*/>*/}
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://floods.ssec.wisc.edu/tiles/RIVER-FLDglobal-composite1/{z}/{x}/{y}.png"
                    opacity="0.9"
                />
                {/*<Marker position={position}>*/}
                {/*    <Popup>*/}
                {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
            </Map>
        </div>
    )
}

export default MyMap;