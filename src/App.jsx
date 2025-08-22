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
              <h3>Our First Kiss 💋</h3>
              <p>20th July, 2023</p>
              <p>This is the spot where we had our first kiss</p>
              <p>This is also where you got a parking ticket</p>
              <img src="/images/first-kiss.jpg" alt="Our First Kiss" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for our first holiday */}
        <Marker position={[28.053646087646484,-16.70598793029785]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our First Holiday ✈️</h3>
              <p>15th April, 2024</p>
              <p>This is the hotel we stayed on our first holiday together!</p>
              <img src="/images/first-holiday.jpg" alt="Our first holiday" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for our second holiday */}
        <Marker position={[30.40322792077922,-9.599826589335514]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our Second Holiday ✈️</h3>
              <p>31st March, 2025</p>
              <p>This is the hotel we stayed on our second holiday together!</p>
              <img src="/images/second-holiday.jpg" alt="Our second holiday" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for where we said goodbye */}
        <Marker position={[51.161070419508036,-0.17692433580625]}> 
          <Popup>
            <div className="popup-content">
              <h3>Where we said goodbye 😢</h3>
              <p>19th August, 2025</p>
              <p>I don't like thinking about this much</p>
            </div>
          </Popup>
        </Marker>
        {/* Marker for our anniversary dinner */}
        <Marker position={[54.97097396850586,-1.5981930494308472]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our first anniversary!</h3>
              <p>25th August, 2024</p>
              <p>This place was really nice, shame I dropped garlic butter on my trousers</p>
              <img src="/images/first-anniversary.jpg" alt="Our first anniversary" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for reading festival */}
        <Marker position={[51.46352105295748,-0.9899128887912645]}> 
          <Popup>
            <div className="popup-content">
              <h3>Reading Festival!</h3>
              <p>27th August, 2023</p>
              <p>Can't believe we had to leave imagine dragons early to watch Billie. (Shame I like her now lol)</p>
              <img src="/images/reading-festival.jpg" alt="Reading Festival" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Marker for Disneyland Paris */}
        <Marker position={[48.873150210583646,2.776099434246837]}> 
          <Popup>
            <div className="popup-content">
              <h3>Disneyland Paris 🏰</h3>
              <p>18th June, 2025</p>
              <p>I think this was a pretty good birthday present, going to be tough for me to top this.</p>
              <img src="/images/disneyland-paris1.jpg" alt="Disneyland Paris Castle" style={{ maxWidth: '100%', height: 'auto' }}/>
              <img src="/images/disneyland-paris2.jpg" alt="Disneyland Paris Selfie" style={{ maxWidth: '100%', height: 'auto' }}/>
              {/* Put these side by side */}
            </div>
          </Popup>
        </Marker>
        {/* Loughborough ball */}
        <Marker position={[52.768963999445866,-1.2280976291028334]}> 
          <Popup>
            <div className="popup-content">
              <h3>Loughborough Ball 🕺💃</h3>
              <p>1st November, 2023</p>
              <p>This was a weird night, thank you Claire for the last minute tickets</p>
              <p>Shame about the oversized suit</p>
              <img src="/images/loughborough-ball.jpg" alt="Loughborough ball" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
        {/* Asked her out */}
        <Marker position={[52.207312,0.124201]}> 
          <Popup>
            <div className="popup-content">
              <h3>The day I asked you offically.</h3>
              <p>1st November, 2023</p>
              <p>This was a weird night, meet your parents in that cheese bar, hit my head, went clubbing</p>
              <p>But most importantly I asked you to be my girlfriend</p>
            </div>
          </Popup>
        </Marker>
        {/* Met your mum */}
        <Marker position={[51.44927468540165,-2.5817672483459586]}> 
          <Popup>
            <div className="popup-content">
              <h3>Where I met your mum.</h3>
              <p>16th August, 2023</p>
              <p>Brief encounter with your mum, hopefully I gave a good impression</p>
            </div>
          </Popup>
        </Marker>
        {/* Bristol date */}
        <Marker position={[51.453985651563585,-2.606679499799114]}> 
          <Popup>
            <div className="popup-content">
              <h3>Our little Bristol date</h3>
              <p>16th August, 2023</p>
              <p>This was a very hilly park, glad we got to the top of the tower though!</p>
              <img src="/images/bristol-park.jpg" alt="Bristol Park" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Render the floating button */}
      <FloatingButton onClick={() => setShowModal(true)} />

      {/* Conditionally render the modal based on state */}
      {showModal && <TodoListModal onClose={() => setShowModal(false)} />}


      {/*pizza expresseses weve been to lol*/}
      {/* Add a login feature, basically a quiz so only she can enter the site */}
      {/* And then if possible make this open source so people can do this for their own relationship */}
      {/* Make the future plans save into a json file */}
      {/* Make the future plan modal nicer */}
      {/* Make the data information save into a json */}
      {/* Make todolist tickable, and on tick make it allow you to pop down a marker */}
      {/* Sort out image sizes */}
      {/* Reuse the floating button, put in the bottom left, make it a stats page, can include about our reliatonship, our current distance, countdowns, etc */}
      {/* Maybe add a key that when pressed - takes you to that point on the map - can add to the stats modal thing maybe or todolist one */}
    </div>
  );
}

export default App;