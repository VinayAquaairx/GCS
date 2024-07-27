import React, { useState, useEffect } from 'react';
import Topbar from '../components/Topbar'
import { MapContainer, TileLayer, ZoomControl, Marker, Polyline, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import './Plan.css';
import 'leaflet/dist/leaflet.css';
import { FaFileUpload, FaMapMarkerAlt, FaUndo, FaTrash } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { Link } from 'react-router-dom';

function Plan() {
    const droneIcon = new L.Icon({
        iconUrl: 'https://cdn.icon-icons.com/icons2/1738/PNG/512/iconfinder-technologymachineelectronicdevice06-4026454_113332.png',
        iconSize: [35, 35],
    });

    // const center = [13, 77.5];

    const markerIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/3425/3425073.png',
        iconSize: [25, 25],
    });

    const initialPosition = [13, 77.5];
    const [dronePosition, setDronePosition] = useState(initialPosition);
    const [path, setPath] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [showPlan, setShowPlan] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [waypoints, setWaypoints] = useState([]);
    const [currentWaypointIndex, setCurrentWaypointIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (isMoving) {
            interval = setInterval(() => {
                if (currentWaypointIndex < waypoints.length) {
                    setDronePosition(prevPosition => {
                        const [lat, lng] = prevPosition;
                        const [targetLat, targetLng] = waypoints[currentWaypointIndex];
            
                        const step = 0.0001;
                        const newLat = lat < targetLat ? Math.min(lat + step, targetLat) : Math.max(lat - step, targetLat);
                        const newLng = lng < targetLng ? Math.min(lng + step, targetLng) : Math.max(lng - step, targetLng);
            
                        if (newLat === targetLat && newLng === targetLng) {
                            setCurrentWaypointIndex(index => index + 1);
                        }
                        setPath(prevPath => [...prevPath, [newLat, newLng]]);
                        return [newLat, newLng];
                    });
                } 
                else {
                    setIsMoving(false);
                }
            }, 100);
        }
    
        return () => clearInterval(interval);
    }, [isMoving, waypoints, currentWaypointIndex]);

    const PlanButton = () => {
        useMapEvents({
            click(e) {
                if (showPlan) {
                setMarkers([...markers, e.latlng]);
                setWaypoints([...waypoints, [e.latlng.lat, e.latlng.lng]]);
                }
            },
        });
        return null;
    };

    const clearWaypoints = () => {
        setMarkers([]);
        setWaypoints([]);
        setPath([]);
        setCurrentWaypointIndex(0);
    };
    
    const removeLastWaypoint = () => {
        setMarkers(markers.slice(0, -1));
        setWaypoints(waypoints.slice(0, -1));
    };
    
    const handleReturnClick = () => {
        const confirmed = window.confirm('Are you sure you want to come back to Home?');
        if (confirmed) {
          setDronePosition(initialPosition);
          setPath([]);
          setCurrentWaypointIndex(0);
          setIsMoving(false);
        }
    };

    const calculateDistance = (lat1, lng1, lat2, lng2) => {
        const toRad = (value) => (value * Math.PI) / 180;
        const R = 6371; // Earth radius in kilometers
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    };
    
    const removeWaypoint = (index) => {
        const newMarkers = markers.filter((_, i) => i !== index);
        const newWaypoints = waypoints.filter((_, i) => i !== index);
        setMarkers(newMarkers);
        setWaypoints(newWaypoints);
    };
    

    return (
        <div className='plan-body'>
            <Topbar />

            {/* <div className='map-container'>
                <MapContainer 
                center={center} 
                zoom={13} 
                scrollWheelZoom={true} 
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="bottomright" />
                    <ResetButton center={center} />
                </MapContainer>
            </div> */}

            <div className="map-container">
                <MapContainer id="waypoint-map" zoomControl={false} center={dronePosition} zoom={15} style={{ width: '100%', height: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={dronePosition} icon={droneIcon} />
                    <Polyline positions={path} color="blue" />
                    {markers.map((marker, index) => (
                    <Marker key={index} position={marker} icon={markerIcon}>
                        <Popup>Point {index + 1}</Popup>
                    </Marker>
                    ))}
                    {showPlan && <PlanButton />}
                    <Polyline positions={waypoints} color="red" />
                    <ZoomControl position="bottomright" />
                </MapContainer>

                <div className="fly-options">
                    <Link to="/fly" className="flight-btn card">
                        <FaTelegramPlane  className="flight-symbol symbol" />
                        <span className='flight'>FLY</span>
                    </Link>

                    <div className="mark-btn card" onClick={() => setShowPlan(!showPlan)}>
                        <FaMapMarkerAlt className="symbol" />
                        <span className='mark'>MARK</span>
                    </div>

                    <div className="takeoff-btn card" onClick={() => { setCurrentWaypointIndex(0); setIsMoving(true); }}>
                        <PiAirplaneTakeoffFill className="symbol" />
                        <span className='takeoff'>TAKEOFF</span>
                    </div>

                    <div className="return-btn card" onClick={handleReturnClick}>
                        <PiAirplaneLandingFill className="symbol" />
                        <span className='return'>RETURN</span>
                    </div>
                    <div className="save-btn card" onClick={handleReturnClick}>
                        <IoIosSave className="symbol" />
                        <span className='save'>SAVEFILE</span>
                    </div>
                    <div className="load-btn card" onClick={handleReturnClick}>
                        <FaFileUpload className="symbol" />
                        <span className='load'>LOADFILE</span>
                    </div>

                    {showPlan && (
                    <div className="circle-controls">
                        <div className="circle-card pin" onClick={() => setShowPlan(true)}>
                            <FaMapMarkerAlt className="pin-symb" />
                            <span className="mark-label">Mark</span>
                        </div>

                        <div className="circle-card remove" onClick={removeLastWaypoint}>
                            <FaUndo className="remove-symb" />
                            <span className="remove-label">Remove</span>
                        </div>

                        <div className="circle-card clear" onClick={clearWaypoints}>
                            <FaTrash className="clear-symb" />
                            <span className="clear-label">Clear</span>
                        </div>
                    </div>
                    )}
                </div>

                {waypoints.length > 0 && (
                    <div className="waypoint-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                    <th>Altitude</th>
                                    <th>Distance (km)</th>
                                    <th>Delete</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {waypoints.map((waypoint, index) => {
                                    const distance = index === 0
                                    ? calculateDistance(initialPosition[0], initialPosition[1], waypoint[0], waypoint[1])
                                    : calculateDistance(waypoints[index - 1][0], waypoints[index - 1][1], waypoint[0], waypoint[1]);
                                    return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{waypoint[0]}</td>
                                        <td>{waypoint[1]}</td>
                                        <td>{(dronePosition[2] || 0).toFixed(2)}</td>
                                        <td>{distance.toFixed(2)}</td>
                                        <td>
                                        <div className='remove-marked-pt' onClick={() => removeWaypoint(index)}><MdOutlineCancel /></div>
                                        </td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* <div className='plan-icon-container'>
                <div className="database-btn card">
                    <BsDatabaseFill className='symbol' />
                    <span className='database'>DATAABASE</span>
                </div>
                <div className="plan-btn card">
                    <FaPaperPlane className='symbol' />
                    <span className='plan'>FLY</span>
                </div>
                <div className="takeoff-btn card">
                    <PiAirplaneTakeoffFill className='symbol' />
                    <span className='takeoff'>TAKEOFF</span>
                </div>
                <div className="return-btn card">
                    <PiAirplaneLandingFill className='symbol' />
                    <span className='return'>RETURN</span>
                </div>
                <div className="radar-btn card">
                    <LuRadar className='symbol' />
                    <span className='radar'>RADAR</span>
                </div>
                <div className="camera-btn card">
                    <BsDatabaseFill className='symbol' />
                    <span className='camera'>CAMERA</span>
                </div>
            </div> */}
        </div>
    )
}

export default Plan