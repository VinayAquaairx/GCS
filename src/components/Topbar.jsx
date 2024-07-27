import React, { useState } from 'react';
// import './index.css';
// import { VscDebugDisconnect } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import '../index.css';
import { Link } from 'react-router-dom';
import { CgLogOut } from "react-icons/cg";
import { AiFillControl } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";

function Topbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='topbar'>
      <div className='topbarleft'>
        <div className='logo'>
          <img className="logoicon" src="src\assets\logo.jpg" alt="" />
          <h2 className='logotext'>AquaAir<span>X</span></h2> 
        </div>
      </div>

      <div className="topbarmiddle">
        <div className='status'>
          <h2 className='connectionstatus'>Disconnected</h2>
          {/* <VscDebugDisconnect className='connectionicon'/> */}
        </div>
      </div>

      {/* <div className='topbarright'>
        <div className='topbar-manage-proj-btn' title='MANAGE PROJECT'><AiFillControl /></div>
        <div className='topbar-profile-btn' title='PROFILE'><BiSolidUserAccount /></div>
        <Link className='topbar-logout-btn' to="/" title='LOGOUT'><CgLogOut /></Link>
        <FaUserCircle className='profile'/>
      </div> */}
      <div className='topbarright'>
        <div 
          className='profile' 
          onMouseClick={() => setShowOptions(!showOptions)} 
          // onMouseClick={() => setShowOptions(false)} 
          onClick={toggleOptions}
        >
          <FaUserCircle />
        </div>
        {showOptions && (
          <div className='topbar-options'>
            <div className='topbar-manage-proj-btn' title='MANAGE PROJECT'><AiFillControl /></div>
            <div className='topbar-profile-btn' title='PROFILE'><BiSolidUserAccount /></div>
            <Link className='topbar-logout-btn' to="/" title='LOGOUT'><CgLogOut /></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar