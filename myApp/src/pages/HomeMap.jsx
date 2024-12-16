import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const HomeMap: React.FC = () => {
  // Set the center of the map and zoom level
  const position: LatLngExpression = [51.505, -0.09]; // Example coordinates (London)

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A sample location on the map.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default HomeMap;
