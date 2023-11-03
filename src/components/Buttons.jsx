import React from 'react'

function Buttons({name}) {
  return (
    <div>
        <button className='p-2 m-3 px-5 shadow-lg bg-slate-300 rounded'>{name}</button>
        
    </div>
  )
}

export default Buttons