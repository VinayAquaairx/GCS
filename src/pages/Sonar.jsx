import React from 'react'
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar'
import { BsDatabaseFill, BsPinMapFill  } from "react-icons/bs";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaMapMarkedAlt, FaCamera } from "react-icons/fa";
import './Sonar.css';
function Sonar() {
    const center = [13, 77.5];

    return (
        <div className='sonar-body'>
            <Topbar />

            <div className='sonar-icon-container'>
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
                <div className="map-btn card">
                    <BsPinMapFill  className='symbol' />
                    <span className='map'>MAP</span>
                </div>
                <div className="cam-btn card">
                    <FaCamera className='symbol' />
                    <span className='cam'>CAM</span>
                </div>
            </div>

            <div className='sonar-container'>
                
            </div>
        </div>
    )
}

export default Sonar