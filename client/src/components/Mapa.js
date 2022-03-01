import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const infoMapa = require("../leroys.json")


class Mapa extends Component {

    // constructor(props) {

    //     super(props);
    // }

    render() {
        return (
        <div id="map">
           <MapContainer center={[40.4169473, -3.7057172]} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {infoMapa.map((object, i) =>        
            <Marker key={i} position={[object.latitud, object.longitud]}>
                <Popup>
                <b>{object.nombre}</b><br />
                {object.direccion}<br />
                {object.poblacion}
                </Popup>
            </Marker>
            )}
        </MapContainer>
        </div>
        );
    }
}
export default Mapa;