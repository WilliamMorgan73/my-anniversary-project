import 'leaflet/dist/leaflet.css';
import './App.css'; 
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  const position = [51.505, -0.09];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;