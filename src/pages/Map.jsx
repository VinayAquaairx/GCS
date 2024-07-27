import React from 'react'

import { Link, useLocation } from 'react-router-dom';
// import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';

import { BsDatabaseFill } from "react-icons/bs";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { LuRadar } from "react-icons/lu";
import { FaMapMarkedAlt,FaCamera } from "react-icons/fa";

import Topbar from '../components/Topbar'
// import ResetButton from '../components/ResetButton';
import './Map.css';
// import 'leaflet/dist/leaflet.css';
import LeafletMap from '../components/LeafletMap';

function Map() {
    // const center = [13, 77.5];
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const lat = parseFloat(queryParams.get('lat')) || 13;
    // const lng = parseFloat(queryParams.get('lng')) || 77.5;
    // const center = [lat, lng];

    return (
        <div className='map-body'>
            <Topbar />

            <div className='map-icon-container'>
                <div className="database-btn card">
                    <BsDatabaseFill className='symbol' />
                    <span className='database'>DATAABASE</span>
                </div>
                <Link to="/plan" className="plan-btn card">
                    <FaMapMarkedAlt className='symbol' />
                    <span className='plan'>PLAN</span>
                </Link>
                <div className="takeoff-btn card">
                    <PiAirplaneTakeoffFill className='symbol' />
                    <span className='takeoff'>TAKEOFF</span>
                </div>
                <div className="return-btn card">
                    <PiAirplaneLandingFill className='symbol' />
                    <span className='return'>RETURN</span>
                </div>
                <div className="camera-btn card">
                    <FaCamera className='symbol' />
                    <span className='camera'>CAMERA</span>
                </div>
                <div className="sonar-btn card">
                    <LuRadar className='symbol' />
                    <span className='sonar'>SONAR</span>
                </div>
            </div>

            <div className='map-container'>
                {/* <MapContainer
                    center={center} 
                    zoom={13} 
                    scrollWheelZoom={true} 
                    style={{ height: "100%", width: "100%" }}
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="bottomright" />
                    <ResetButton center={center} />
                    {lat && lng && (
                        <Marker position={center}>
                            <Popup>
                                Selected Location: {center[0]}, {center[1]}
                            </Popup>
                        </Marker>
                    )}
                </MapContainer> */}
                <LeafletMap />
            </div>
        </div>
    )
}

export default Map