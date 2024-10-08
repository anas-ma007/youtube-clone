import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if (!isMenuOpen )return null
  return (
    <React.Fragment> 
      <div className='p-10 mr-1 shadow-lg bg-slate-50 w-56 z-50'>
        <div>
          <Link to={"/"}>   <h3 className='text-xl font-bold ml-3 h-9 pt-1.5 shadow-sm  hover:bg-gray-200 '>Home</h3> </Link>
          <h3 className='text-xl font-bold ml-3 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Shorts</h3>
          <h3 className='text-xl font-bold ml-3 h-9 pt-1.5 shadow-sm  hover:bg-gray-200 '>Subscriptions</h3>
        </div>
        <div>
          <ul className='pt-5 '>
            <p className='text-xl font-bold ml- h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>You</p>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200' >Your Chanel</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>History</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Your Videos</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Show More...</li>
          </ul>
        </div>
        <div>
          <ul className='pt-5'>
            <p className='text-xl font-bold ml-3 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Subscriptions</p>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 1 </li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 2</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 3</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 4</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 5</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 6</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 7</li>
            <li className='text-xl ml-6 h-9 pt-1.5 shadow-sm  hover:bg-gray-200'>Chanel 8</li>
          </ul>
        </div>

      </div>
    </React.Fragment>

  )
}

export default Sidebar