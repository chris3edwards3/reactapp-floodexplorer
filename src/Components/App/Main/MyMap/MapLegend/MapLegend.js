import React, { useState, useEffect } from "react"
import {MapControl, withLeaflet} from "react-leaflet";
import "./MapLegend.css"
import L from "leaflet";

let legend;
let myMap;

class MapLegend extends MapControl {
    //https://codesandbox.io/s/how-to-add-a-legend-to-the-map-using-react-leaflet-6yqs5?file=/src/styles.css:25-443
    createLeafletElement(props) {
    }

    componentDidMount() {
        let legendInfo = this.props.layerName.legend;

        legend = L.control({position: "bottomleft"});

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            let labels = [];

            legendInfo.forEach((row) => {
                    if (row.title) {
                        labels.push(row.title);
                    } else if (row.color && row.label) {
                        labels.push(
                            '<i style="background:' +
                            row.color +
                            '"></i> ' +
                            row.label
                        );
                    }
                }
            );

            div.innerHTML = labels.join("<br>");
            return div;
        };

        const {map} = this.props.leaflet;
        myMap = map;
        legend.addTo(myMap);
    }

    componentDidUpdate() {
        legend.remove(myMap);

        let newLegendInfo = this.props.layerName.legend;

        console.log(this.props.layerName.legend)

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            let labels = [];

            newLegendInfo.forEach((row) => {
                    if (row.title) {
                        labels.push(row.title);
                    } else if (row.color && row.label) {
                        labels.push(
                            '<i style="background:' +
                            row.color +
                            '"></i> ' +
                            row.label
                        );
                    }
                }
            );

            div.innerHTML = labels.join("<br>");
            return div;
        };

        legend.addTo(myMap);
    }
}

export default withLeaflet(MapLegend);
