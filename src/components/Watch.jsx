import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

function Watch() {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"), 'use params');


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div>
            {
                <iframe 
                width="1520" height="581" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="പഴയകാല പ്രൗഡിയുള്ള തറവാട് വീടും പറമ്പും വെറും 26 ലക്ഷം രൂപക്ക് / Owner No: 9447058046 /" 
                frameBorder="0" 
                allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
                </iframe>
            }
            
        </div>
    )
}

export default Watch