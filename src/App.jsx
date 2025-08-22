import 'leaflet/dist/leaflet.css';
import './App.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const position = [51.48684202000723,-3.183058895639874];
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker for our first date spot */}
        <Marker position={[51.479002265192214,-3.175454076575537]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our First Date ❤️</h3>
              <p>20th July, 2023</p>
              <p>This is where we played minigolf!</p>
              <p>I definitely won :)</p>
              <img src="/images/first-date.jpg" alt="Our First Date" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for our first kiss */}
        <Marker position={[51.48684202000723,-3.183058895639874]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our First Kiss ❤️</h3>
              <p>20th July, 2023</p>
              <p>This is the spot where we had our first kiss</p>
              <p>This is also where you got a parking ticket</p>
              <img src="/images/first-kiss.jpg" alt="Our First Kiss" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>

      </MapContainer>

      {/*first holiday, first anniversary, reading festival, second holiday, First time meeting her mum, meeting her dad. LOUGHBOROUGH BALL THING*/}
    </div>
  );
}

export default App;