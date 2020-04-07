import {MapControl, withLeaflet} from "react-leaflet";
import "./MapLegend.css"
import L from "leaflet";

let floodLegend;
let extraLegend;
let legend;
let myMap;
let createLegend;

class FloodLegend extends MapControl {

    createLeafletElement(props) {
    }

    componentDidMount() {
        let legendInfo = this.props.layerName.legend;
        const {map} = this.props.leaflet;
        let id = this.props.id;

        createLegend = function(legendInfo, map) {
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

            myMap = map;

            if (id === "fL") {
                floodLegend = legend;
                floodLegend.addTo(map);
                console.log("Made new flood legend")
            } else if (id === "eL") {
                extraLegend = legend;
                extraLegend.addTo(map);
                console.log("made new flood legend")
            }
        };

        createLegend(legendInfo, map);

    }

    componentDidUpdate(prevProps) {
        let id = this.props.id;
        let prevLegend = prevProps.layerName.legend;
        let newLegend = this.props.layerName.legend;
        let prevVisible = prevProps.isVisible;
        let newVisible = this.props.isVisible;

        if (prevLegend !== newLegend || prevVisible !== newVisible) {
            if (id === "fL") {
                if (prevVisible) {
                    floodLegend.remove(myMap);
                    console.log("removed flood legend");
                }
            } else if (id === "eL") {
                if (prevVisible) {
                    extraLegend.remove(myMap);
                    console.log("removed extra legend");
                }
            }
            if (newVisible) {
                createLegend(newLegend, myMap);
            }
        }
    }
}

export default withLeaflet(FloodLegend);
