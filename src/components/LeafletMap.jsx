import React from 'react'
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import ResetButton from '../components/ResetButton';
import './LeafletMap.css'
import 'leaflet/dist/leaflet.css';

function LeafletMap() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const lat = parseFloat(queryParams.get('lat')) || 13;
    const lng = parseFloat(queryParams.get('lng')) || 77.5;
    const center = [lat, lng];

    return (
        <div className='LLmap-container'>
            <MapContainer
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
            </MapContainer>
        </div>
    )
}

export default LeafletMap