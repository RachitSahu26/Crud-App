import React from 'react'
import Model from './Model'

function AddAndUpdate({ isOpen,contact, onClose}) {
  return (
    <div>
      <Model  contact={contact}isOpen={isOpen} onClose={onClose} />
  
    </div>
  )
}

export default AddAndUpdate
