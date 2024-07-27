import React from 'react';
import { useMap } from 'react-leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './ResetButton.css';

const ResetButton = ({ center }) => {
  const map = useMap();

  const handleReset = () => {
    map.setView(center, map.getZoom());
  };

  return (
    <div className="reset-button" onClick={handleReset}>
      <FaMapMarkerAlt />
    </div>
  );
};

export default ResetButton;