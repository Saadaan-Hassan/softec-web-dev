import React from 'react'

const EditUser = ({username , email , location , description , gender , profile}) => {
  return (
   <>
    <button className="btn btn-primary text-white w-[30%]" onClick={()=>document.getElementById('my_modal_5').showModal()}>Edit Profile</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Edit Profile</h3>
    <div className='flex flex-col gap-5'>

    <label>Username :</label>{"  "}<input name='username' className='border p-1' />
    <label>Email :</label>{"  "}<input name='email' className='border p-1' />
    <label>Location :</label>{"  "}<input name='location' className='border p-1' />
    <label>Description :</label>{"  "}<input name='description' className='border p-1' />
    <label>Gender :</label>{"  "}<input name='gender' className='border p-1' />
    <label>Profile Pic :</label>{"  "}<input name='avatar' type='file' className='border p-1' />
    
    </div>
    
    
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
      <div className='btn btn-primary text-white'>Edit</div>
    </div>
  </div>
</dialog>
   </>
  )
}

export default EditUser