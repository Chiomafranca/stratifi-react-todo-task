import React from 'react'
import { FaTrash } from 'react-icons/fa';

const Card = ({text, onChange, onClick, className}) => {
  return (
    <div className='flex gap-4'>
        <input type="checkbox"
         onChange={onChange}
         />
        <p className={className}>{text}</p>
        <FaTrash className='ml-auto' onClick={onClick}/>
    </div>
  )
}
export default Card
