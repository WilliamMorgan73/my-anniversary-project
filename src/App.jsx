import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FloatingButton from "./FloatingButton";
import TodoListModal from "./modals/TodoListModal";
import AnniversaryModal from "./modals/AnniversaryModal";
import data from '../public/map-data.json'

function App() {
  const [showTodoListModal, setShowTodoListModal] = useState(false);
  const [showAnniversaryModal, setShowAnniversaryModal] = useState(false);

  const position = [51.48684202000723, -3.183058895639874];
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => (
          <Marker position={item.coordinates} key={item.id}>
            <Popup>
              <div className="popup-content">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.description}</p>
                {/* Dynamically render images if they exist */}
                {item.images &&
                  item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={item.title}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  ))}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Button for the To-Do List Modal */}
      <FloatingButton onClick={() => setShowTodoListModal(true)}>
        Future Plans 🚀
      </FloatingButton>

      {/* Button for the Anniversary Modal */}
      <FloatingButton
        position="bottom-left"
        onClick={() => setShowAnniversaryModal(true)}
      >
        Our Story ✨
      </FloatingButton>

      {/* Conditionally render the modals */}
      {showTodoListModal && (
        <TodoListModal onClose={() => setShowTodoListModal(false)} />
      )}
      {showAnniversaryModal && (
        <AnniversaryModal onClose={() => setShowAnniversaryModal(false)} />
      )}
    </div>
  );
}

export default App;
