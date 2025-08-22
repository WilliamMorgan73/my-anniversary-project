import React, { useState, useEffect } from 'react';
import { getDistance } from 'geolib';

const formatTime = (ms, showYears = false) => {
  if (ms <= 0) return "We're together now! ❤️";

  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  if (showYears) {
    const years = Math.floor(days / 365.25);
    const remainingDays = Math.floor(days % 365.25);
    return `${years} years, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
  } else {
    return `${days} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
  }
};

const AnniversaryModal = ({ onClose }) => {
  const startDate = new Date('2023-08-25T00:00:00');
  const nextMeetingDate = new Date('2025-12-03T00:00:00');

  const [duration, setDuration] = useState(0);
  const [timeUntilNextMeeting, setTimeUntilNextMeeting] = useState(0);

  // Effect to update the duration since the start date
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDuration(now - startDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  // Effect to update the countdown until the next meeting date
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = nextMeetingDate - now;
      setTimeUntilNextMeeting(timeLeft > 0 ? timeLeft : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextMeetingDate]);

  // Locations for distance calculation
  const myLocation = { latitude: 51.66744629340425, longitude: -3.1953825032586947 };
  const lilyLocation = { latitude: -33.87328481729837, longitude: 151.27332341546386 };

  // Calculate the distance once
  const distanceInMeters = getDistance(myLocation, lilyLocation);
  const distanceInMiles = (distanceInMeters * 0.000621371).toFixed(2);

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

        <h2>Stats 📊</h2>
        <p>
          We have been dating for: {formatTime(duration, true)}
        </p>
        <p>
          Time until we see each other: {formatTime(timeUntilNextMeeting, false)}
        </p>
        <p>
          We are currently {distanceInMiles} miles apart.
        </p>
      </div>
    </div>
  );
};

export default AnniversaryModal;