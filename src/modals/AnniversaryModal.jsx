import React from 'react';

const AnniversaryModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Our Anniversary Story ❤️</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
        <p>
          To the most beautiful girl in the world, Lily,
          <br /><br />
          These two years have been the most incredible journey of my life.
          Every moment with you is a new adventure, and this map is just a small
          token to celebrate all the amazing memories we've made.
          <br /><br />
          Here's to a lifetime more of exploring and creating beautiful memories
          together. I love you more than words can say.
        </p>
        {/* Add stats here */}
      </div>
    </div>
  );
};

export default AnniversaryModal;