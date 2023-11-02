import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if (!isMenuOpen )return null
  return (
    <React.Fragment>
      <div className='p-10 mr-1 shadow-lg bg-slate-50 w-56'>
        <div>
          <h3 className='text-xl font-bold ml-3 '>Home</h3>
          <h3 className='text-xl font-bold ml-3'>Shorts</h3>
          <h3 className='text-xl font-bold ml-3'>Subscriptions</h3>
        </div>
        <div>
          <ul className='pt-5'>
            <p className='text-xl font-bold ml-3'>You</p>
            <li className='text-xl ml-6' >Your Chanel</li>
            <li className='text-xl ml-6'>History</li>
            <li className='text-xl ml-6'>Your Videos</li>
            <li className='text-xl ml-6'>Show More...</li>
          </ul>
        </div>
        <div>
          <ul className='pt-5'>
            <p className='text-xl font-bold ml-3'>Subscriptions</p>
            <li className='text-xl ml-6'>Chanel 1 </li>
            <li className='text-xl ml-6'>Chanel 2</li>
            <li className='text-xl ml-6'>Chanel 3</li>
            <li className='text-xl ml-6'>Chanel 4</li>
            <li className='text-xl ml-6'>Chanel 5</li>
            <li className='text-xl ml-6'>Chanel 6</li>
            <li className='text-xl ml-6'>Chanel 7</li>
            <li className='text-xl ml-6'>Chanel 8</li>
          </ul>
        </div>

      </div>
    </React.Fragment>

  )
}

export default Sidebar