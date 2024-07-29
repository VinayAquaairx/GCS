import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import './Userprofile.css';
import Topbar from '../components/Topbar';

const UserProfile = () => {
  const [user, setUser] = useState({
    ownerName: 'Vinayak',
    email: 'vinayak@aquaairx.com',
    mobile: '+91 9872666876',
    subscription: 'Basic',
    organisation: 'AquaAirX',
    username: 'Vinayak',
    role: 'Admin',
    photo: '',
  });

  const [editUserInfo, setEditUserInfo] = useState(false);
  const [editOrgInfo, setEditOrgInfo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const toggleEditUserInfo = () => {
    setEditUserInfo(!editUserInfo);
  };

  const toggleEditOrgInfo = () => {
    setEditOrgInfo(!editOrgInfo);
  };

  const handleSaveUserInfo = () => {
    setEditUserInfo(false);
    // Add logic to save the data to a backend or state management
  };

  const handleSaveOrgInfo = () => {
    setEditOrgInfo(false);
    // Add logic to save the data to a backend or state management
  };

  return (
    <div className='userprofile-parent'>
      <Topbar />
      <div className='container'>
        <h1 className='header'>User Profile</h1>

        <div className='profile-card'>
          <h6>Hey {user.ownerName}</h6>
          <div className='profile-section'>
            <div className='profile-photo'>
              <input
                accept='image/*'
                id='contained-button-file'
                type='file'
                onChange={handlePhotoChange}
              />
              <label htmlFor='contained-button-file'>
                <img
                  src={user.photo || 'https://via.placeholder.com/100'}
                  className='avatar'
                  alt='Add Photo'
                />
              </label>
            </div>
            <div style={{ flex: 1 }}>
              <div className='text-field'>
                <label>Owner Name</label>
                <input
                  name='ownerName'
                  value={user.ownerName}
                  onChange={handleInputChange}
                  disabled={!editUserInfo}
                />
              </div>
              <div className='text-field'>
                <label>Email Address</label>
                <input
                  name='email'
                  value={user.email}
                  onChange={handleInputChange}
                  disabled={!editUserInfo}
                />
              </div>
              <div className='text-field'>
                <label>Mobile Number</label>
                <input
                  name='mobile'
                  value={user.mobile}
                  onChange={handleInputChange}
                  disabled={!editUserInfo}
                />
              </div>
              <div className='text-field'>
                <label>Subscription Type</label>
                <input
                  name='subscription'
                  value={user.subscription}
                  onChange={handleInputChange}
                  disabled={!editUserInfo}
                />
              </div>
              {editUserInfo ? (
                <button className='save-button' onClick={handleSaveUserInfo}>
                  Save
                </button>
              ) : (
                <FaEdit className='icon-button' onClick={toggleEditUserInfo} />
              )}
            </div>
          </div>
        </div>

        <div className='profile-card'>
          <h6>Organisation Information</h6>
          <div className='profile-section'>
            <div style={{ flex: 1 }}>
              <div className='text-field'>
                <label>Organisation Name</label>
                <input
                  name='organisation'
                  value={user.organisation}
                  onChange={handleInputChange}
                  disabled={!editOrgInfo}
                />
              </div>
              <div className='text-field'>
                <label>Username</label>
                <input
                  name='username'
                  value={user.username}
                  onChange={handleInputChange}
                  disabled={!editOrgInfo}
                />
              </div>
              <div className='second-half'>
              <div className='text-field'>
                <label>Role</label>
                <input
                  name='role'
                  value={user.role}
                  onChange={handleInputChange}
                  disabled={!editOrgInfo}
                />
                </div>
              </div>
              {editOrgInfo ? (
                <button className='save-button' onClick={handleSaveOrgInfo}>
                  Save
                </button>
              ) : (
                <FaEdit className='icon-button' onClick={toggleEditOrgInfo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
