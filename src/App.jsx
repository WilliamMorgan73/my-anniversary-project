import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FloatingButton from './FloatingButton';
import TodoListModal from './modals/TodoListModal';

function App() {
  const [showModal, setShowModal] = useState(false);
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

      {/* Render the floating button */}
      <FloatingButton onClick={() => setShowModal(true)} />

      {/* Conditionally render the modal based on state */}
      {showModal && <TodoListModal onClose={() => setShowModal(false)} />}


      {/*first holiday, first anniversary, reading festival, second holiday, First time meeting her mum, meeting her dad. LOUGHBOROUGH BALL THING, where we said goodbye,*/}
      {/* Add a login feature, basically a quiz so only she can enter the site */}
      {/* And then if possible make this open source so people can do this for their own relationship */}
      {/* Make the future plans save into a json file */}
      {/* Make the future plan modal nicer */}
      {/* Make the data information save into a json */}
      {/* Make todolist tickable, and on tick make it allow you to pop down a marker */}
    </div>
  );
}

export default App;