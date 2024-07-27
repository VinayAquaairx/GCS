import React, { useState } from 'react';
import Map from './Map';
import Cam from './Cam';
import Sonar from './Sonar';


import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import LeafletMap from '../components/LeafletMap';

const Page1 = () => <div><Map /></div>;
const Page2 = () => <div><Cam /></div>;
const Page3 = () => <div><Sonar /></div>;

// Component to display the small preview of a page
const SmallPreview = ({ content, onClick }) => (
  <div 
    style={{
      // border: '1px solid black', 
      padding: '0px',
      margin: '5px',
      height: '100%',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {content}
  </div>
);

const Fly = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('Page1');

  // Function to render the current page
  const renderPage = (page) => {
    switch (page) {
      case 'Page1':
        return <Page1 />;
      case 'Page2':
        return <Page2 />;
      case 'Page3':
        return <Page3 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div>
      {/* Main content area */}
      <div>
        {renderPage(currentPage)}
      </div>

      {/* Small previews at the bottom right */}
      <div style={{ 
        position: 'fixed', 
        bottom: '5px', 
        left: '5px', 
        display: 'flex', 
        width: '20%',
        height:'45%',
        flexDirection: 'column',
        color: 'black'
      }}>
        {currentPage !== 'Page1' && <SmallPreview content={
          <div style={{
            border: '1px solid black',
            position: 'relative',
            // bottom: "0",
            height: '100%',
            overflow: 'hidden',
          }}>
            <LeafletMap />
          </div>
        } onClick={() => setCurrentPage('Page1')} />}

        {currentPage !== 'Page2' && <SmallPreview content={
          <div style={{
            border: '1px solid black',
            position: 'relative',
            // bottom: "0",
            height: '100%',
            overflow: 'hidden',
          }}>
            Page Cam Preview
          </div>
        } onClick={() => setCurrentPage('Page2')} />}

        {currentPage !== 'Page3' && <SmallPreview content={
          <div style={{
            border: '1px solid black',
            position: 'relative',
            // bottom: "0",
            height: '100%',
            overflow: 'hidden',
          }}>
            Page Sonar Preview
          </div>
        } onClick={() => setCurrentPage('Page3')} />}
      </div>
    </div>
  );
};

export default Fly;