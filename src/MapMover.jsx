import { useMap } from "react-leaflet";
import { useEffect } from "react";

const MapMover = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords, map]);
  return null;
};

export default MapMover;
