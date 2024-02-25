import React, { useContext, useState } from 'react';
import UserContext from '../../context/user/UserContext';

const EditUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);
  const [description, setDescription] = useState(user.description);
  const [gender, setGender] = useState(user.gender);
  const [profile, setProfile] = useState(user.avatar);

  const handleEdit = () => {
    // Perform edit actions here
  };

  return (
    <>
      <button className="btn btn-primary text-white w-[30%]" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit Profile</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Profile</h3>
          <div className='flex flex-col gap-5'>
            <label>Username :</label>{"  "}<input name='username' className='border p-1' value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email :</label>{"  "}<input name='email' className='border p-1' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Location :</label>{"  "}<input name='location' className='border p-1' value={location} onChange={(e) => setLocation(e.target.value)} />
            <label>Description :</label>{"  "}<input name='description' className='border p-1' value={description} onChange={(e) => setDescription(e.target.value)} />
            <label>Gender :</label>{"  "}<input name='gender' className='border p-1' value={gender} onChange={(e) => setGender(e.target.value)} />
            <label>Profile Pic :</label>{"  "}<input name='avatar' type='file' className='border p-1' value={profile} onChange={(e) => setProfile(e.target.value)} />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
            <button className='btn btn-primary text-white' onClick={handleEdit}>Edit</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditUser;
