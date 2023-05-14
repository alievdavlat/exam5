import React from 'react'
import './AddRezume.css'
import CloseIcon from '@mui/icons-material/Close';

function AddRezume({setOpenModal, name,city}) {
  const handleClose = e => {
    if(e.target.className == 'addRezume-overlay') {
      setOpenModal(false)
    };
  }

  return (
    <div className='addRezume-overlay' onClick={e => handleClose(e)}>
        <div className="addRezume">
          <div className='addRezume-top'>
            <span>
            <h2>{name}</h2>
            <p>{city}</p>
            </span>
              <span style={{cursor:'pointer'}} onClick={() => setOpenModal(false)}><CloseIcon/></span>
          </div>
          <input type="text" placeholder='link to resume' className='file-input' />
          <span><input type="checkbox" className='checkbox' /> agree the terms</span>
          <br />
          <button onClick={() => setOpenModal(false)}>Send</button>
        </div>
    </div>
  )
}

export default AddRezume
