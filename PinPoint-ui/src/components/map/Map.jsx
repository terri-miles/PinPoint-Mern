import React from "react";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const MyMapComponent = ({ location }) => {
  // Check if the position is available before rendering the map
  if (!location.latitude || !location.longitude) {
    return <div>Loading map...</div>;
  }
  

  return (
    <div className="map">
      {location && (
        <MapContainer
          center={[location.latitude, location.longitude]} // Ensure lat, lng are in an array
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", zIndex: "3" }} // Ensure the map has a size
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              You are here! <br /> Latitude: {location.latitude}, Longitude:{" "}
              {location.longitude}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
