import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserLocation = ({ location }) => {
  const { latitude, longitude } = location;
  const position = [latitude, longitude];
  return (
    <>
      <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default UserLocation;
