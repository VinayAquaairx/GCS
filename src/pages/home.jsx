// import React, { useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import { MapContainer, TileLayer, ZoomControl, useMapEvents } from 'react-leaflet';

// import { FaPlus } from "react-icons/fa6";
// import { BsDatabaseFill } from "react-icons/bs";
// import { IoMdLocate } from "react-icons/io";

// import Topbar from '../components/Topbar';
// import ResetButton from '../components/ResetButton';
// import './Home.css';
// import 'leaflet/dist/leaflet.css';

// function Home() {
//   const initialCenter = [13, 77.5];
//   const [center, setCenter] = useState(initialCenter);
//   const [isSelectingLocation, setIsSelectingLocation] = useState(false);
//   const [tempCenter, setTempCenter] = useState(null);

//   const [isOverlayOpen, setIsOverlayOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleOverlayToggle = () => {
//     setIsOverlayOpen(!isOverlayOpen);
//   };

//   const handleCreateProject = (e) => {
//     e.preventDefault();
//     // Perform any project creation logic here
//     console.log('Selected Location:', center);
//     navigate(`/fly?lat=${center[0]}&lng=${center[1]}`);
//     // navigate('/fly');
//   };

//   const handleLocateOnMapClick = () => {
//     setIsOverlayOpen(false);
//     setIsSelectingLocation(true);
//   };

//   function LocationMarker() {
//     useMapEvents({
//       click(e) {
//         if (isSelectingLocation) {
//           setTempCenter([e.latlng.lat, e.latlng.lng]);
//           setIsSelectingLocation(false);
//           setIsOverlayOpen(true);
//         }
//       },
//     });
//     return null;
//   }

//   React.useEffect(() => {
//     if (!isOverlayOpen && tempCenter) {
//       setCenter(tempCenter);
//       setTempCenter(null);
//     }
//   }, [isOverlayOpen, tempCenter]);

//   return (
//     <div className='home-body'>
//       <Topbar />

//       <div className='createproj-container' onClick={handleOverlayToggle}>
//         <div className='createproj-text'>CREATE PROJECT</div>
//         <div className='createproj-logo'><FaPlus /></div>
//       </div>

//       <div className='home-icon-container'>
//           <div className="database-btn card">
//             <BsDatabaseFill className='symbol' />
//             <span className='label'>Database</span>
//           </div>
//       </div>

//       <div className='map-container'>
//         <MapContainer 
//           center={center} 
//           zoom={13} 
//           scrollWheelZoom={true} 
//           style={{ height: "100%", width: "100%" }}
//           zoomControl={false}>
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <ZoomControl position="bottomright" />
//             <ResetButton center={center} />
//             <LocationMarker />
//         </MapContainer>
//       </div>

//       {isOverlayOpen && (
//         <div className='overlay'>
//           <div className='overlay-content'>
//             <div className='form-head'>CREATE PROJECT</div>

//             <form>
//               <label>
//                 PROJECT NAME:
//                 <input type="text" name="projectName" />
//               </label>

//               <label>
//                 PROJECT DESCRIPTION:
//                 <textarea name="description"></textarea>
//               </label>

//               <label className='initialpt-set'>
//                 VEHICLE INITIAL POINT
//                 <div className="LOM" onClick={handleLocateOnMapClick}>
//                   <IoMdLocate className='LOM-icon'/>
//                   <span>Locate on Map</span>
//                 </div>
//               </label>

//               <label className='restrictions'>
//                 <input type="checkbox" name="" id="" />
//                 FLIGHT RESTRICTIONS
//               </label>

//               <label className='add-memb'>
//                 <div className='memb-head'>
//                   <div>MEMBERS:</div>
//                   <div className='copycode-text'>Copy Code</div>
//                 </div>
                
//                 <div className='memb-disp'>
//                   <div className='creator-det'>
//                     <div className='creator-name'>xyz</div>
//                     <div className='creator-role'>admin</div>
//                   </div>

//                   <div className='others-joined'>
                    
//                   </div>
//                 </div> {/* memb display */}
//               </label>

//               <label className='vehicle-select'>
//                 SELECT VEHICLE:
//                 <select name="recordfileformat" id='mapprovdrpbox'>
//                   <option value="veh1">Vehicle 1</option>
//                   <option value="veh2">Vehicle 2</option>
//                   <option value="veh3">Vehicle 3</option>
//                 </select>
//               </label>

//               <button type="submit" className='createproj-btn' onClick={handleCreateProject}>CREATE PROJECT</button>
//               <button type="button" onClick={handleOverlayToggle}>CANCEL</button>
//             </form>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, ZoomControl, useMapEvents } from 'react-leaflet';

import { FaPlus } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";
import { IoMdLocate } from "react-icons/io";

import Topbar from '../components/Topbar';
import ResetButton from '../components/ResetButton';
import './Home.css';
import 'leaflet/dist/leaflet.css';

function Home() {
  const initialCenter = [13, 77.5];
  const [center, setCenter] = useState(initialCenter);
  const [isSelectingLocation, setIsSelectingLocation] = useState(false);
  const [tempCenter, setTempCenter] = useState(null);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const handleOverlayToggle = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    // Perform any project creation logic here
    console.log('Selected Location:', center);
    navigate(`/fly?lat=${center[0]}&lng=${center[1]}`);
    // navigate('/fly');
  };

  const handleLocateOnMapClick = () => {
    setIsOverlayOpen(false);
    setIsSelectingLocation(true);
  };

  function LocationMarker() {
    useMapEvents({
      click(e) {
        if (isSelectingLocation) {
          setTempCenter([e.latlng.lat, e.latlng.lng]);
          setIsSelectingLocation(false);
          setIsOverlayOpen(true);
        }
      },
    });
    return null;
  }

  React.useEffect(() => {
    if (!isOverlayOpen && tempCenter) {
      setCenter(tempCenter);
      setTempCenter(null);
    }
  }, [isOverlayOpen, tempCenter]);

  return (
    <div className='home-body'>
      <Topbar />

      <div className='home-createproj-container' onClick={handleOverlayToggle}>
        <div className='home-createproj-text'>CREATE PROJECT</div>
        <div className='home-createproj-logo'><FaPlus /></div>
      </div>

      <div className='home-icon-container'>
        <div className="home-database-btn card">
          <BsDatabaseFill className='home-symbol' />
          <span className='home-label'>Database</span>
        </div>
      </div>

      <div className='home-map-container'>
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
            <LocationMarker />
        </MapContainer>
      </div>

      {isOverlayOpen && (
        <div className='home-overlay'>
          <div className='home-overlay-content'>
            <div className='home-form-head'>CREATE PROJECT</div>

            <form>
              <label>
                PROJECT NAME:
                <input type="text" name="projectName" />
              </label>

              <label>
                PROJECT DESCRIPTION:
                <textarea name="description"></textarea>
              </label>

              <label className='home-initialpt-set'>
                VEHICLE INITIAL POINT
                <div className="home-LOM" onClick={handleLocateOnMapClick}>
                  <IoMdLocate className='home-LOM-icon'/>
                  <span>Locate on Map</span>
                </div>
              </label>

              <label className='home-restrictions'>
                <input type="checkbox" name="" id="" />
                FLIGHT RESTRICTIONS
              </label>

              <label className='home-add-memb'>
                <div className='home-memb-head'>
                  <div>MEMBERS:</div>
                  <div className='home-copycode-text'>Copy Code</div>
                </div>
                
                <div className='home-memb-disp'>
                  <div className='home-creator-det'>
                    <div className='home-creator-name'>xyz</div>
                    <div className='home-creator-role'>admin</div>
                  </div>

                  <div className='home-others-joined'>
                    
                  </div>
                </div> {/* memb display */}
              </label>

              <label className='home-vehicle-select'>
                SELECT VEHICLE:
                <select name="recordfileformat" id='home-mapprovdrpbox'>
                  <option value="veh1">Vehicle 1</option>
                  <option value="veh2">Vehicle 2</option>
                  <option value="veh3">Vehicle 3</option>
                </select>
              </label>

              <button type="submit" className='home-createproj-btn' onClick={handleCreateProject}>CREATE PROJECT</button>
              <button type="button" onClick={handleOverlayToggle}>CANCEL</button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
