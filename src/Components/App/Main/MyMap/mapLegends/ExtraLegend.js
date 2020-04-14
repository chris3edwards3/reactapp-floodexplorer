import {MapControl, withLeaflet} from "react-leaflet";
import "./mapLegends.css"
import L from "leaflet";

let extraLegend;
let myMap;
let createLegend;

class ExtraLegend extends MapControl {

    createLeafletElement(props) {
    }

    componentDidMount() {
        let legendInfo = this.props.layerObj.legend;
        const {map} = this.props.leaflet;
        myMap = map;

        createLegend = function (legendInfo) {
            extraLegend = L.control({position: "bottomleft"});

            extraLegend.onAdd = () => {
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

            extraLegend.addTo(myMap);
        };

        if (this.props.isVisible) {
            createLegend(legendInfo, myMap);
        }


    }

    componentDidUpdate(prevProps) {
        let prevLegend = prevProps.layerObj.legend;
        let newLegend = this.props.layerObj.legend;
        let prevVisible = prevProps.isVisible;
        let newVisible = this.props.isVisible;

        if (prevLegend !== newLegend || prevVisible !== newVisible) {
            if (prevVisible) {
                extraLegend.remove(myMap);
            }
            if (newVisible) {
                createLegend(newLegend, myMap);
            }
        }
    }
}

export default withLeaflet(ExtraLegend);
