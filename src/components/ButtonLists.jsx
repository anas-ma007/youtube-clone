import React from 'react'
import Buttons from './Buttons'


const list = ["All", "Live", "Cricket", "Mobiles", "laptops", "News", "Soccer", "Music", "New"]

function ButtonLists() {
    return (
        <div className='flex  overflow-y-auto '>
           {
            list.map((item, index)=>
            <Buttons key={index} name={item}/>
            )
           }
        </div>
    )
}

export default ButtonLists