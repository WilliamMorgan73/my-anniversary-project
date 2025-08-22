import React, { useState, useEffect } from 'react';

const OracleModal = ({ onClose, onLocationClick }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/map-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch location data.');
        }
        return response.json();
      })
      .then(data => {
        const dataWithPlace = data.map(item => ({
            ...item
        }));
        
        const sortedData = dataWithPlace.sort((a, b) => new Date(a.date) - new Date(b.date));
        setLocations(sortedData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Loading locations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Use event.stopPropagation() to prevent clicks inside the content from closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Our Story</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
        <ul>
            {locations.map(location => (
              <li
                key={location.id}
                onClick={() => {
                  const coords = Array.isArray(location.coordinates)
                    ? location.coordinates
                    : [location.coordinates.latitude, location.coordinates.longitude];
                  onLocationClick(coords);
                  onClose();
                }}
                className="location-item"
              >
                <strong>{location.date}</strong> - {location.title}
                <br />
                <small>{location.location}</small>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default OracleModal;