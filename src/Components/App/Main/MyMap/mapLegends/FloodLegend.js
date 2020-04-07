import {MapControl, withLeaflet} from "react-leaflet";
import "./mapLegends.css"
import L from "leaflet";

let floodLegend;
let myMap;
let createLegend;

class FloodLegend extends MapControl {

    createLeafletElement(props) {
    }

    componentDidMount() {
        let legendInfo = this.props.layerName.legend;
        const {map} = this.props.leaflet;
        myMap = map;

        createLegend = function (legendInfo, map) {
            floodLegend = L.control({position: "bottomleft"});

            floodLegend.onAdd = () => {
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

            floodLegend.addTo(myMap);
        };

        if (this.props.isVisible) {
            createLegend(legendInfo, map);
        }

    }

    componentDidUpdate(prevProps) {
        let prevLegend = prevProps.layerName.legend;
        let newLegend = this.props.layerName.legend;
        let prevVisible = prevProps.isVisible;
        let newVisible = this.props.isVisible;

        if (prevLegend !== newLegend || prevVisible !== newVisible) {
            if (prevVisible) {
                floodLegend.remove(myMap);
                console.log("removed legend");
            }
            if (newVisible) {
                createLegend(newLegend, myMap);
            }
        }
    }
}

export default withLeaflet(FloodLegend);
