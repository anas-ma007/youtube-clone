import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './commentsContainer'
import WatchShimmer from './WatchShimmer'


function Watch() {
    const [searchParams] = useSearchParams()
    const [makeDelay, setMakeDelay] = useState(true)
    console.log(searchParams.get("v"), 'use params');


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())

        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setMakeDelay(false)
        }
        fetchData()
    }, [dispatch])


    return (
        <div className='flex fixed flex-col'>

            <div className=''>
                {
                    makeDelay ? (
                        <WatchShimmer />
                    ) : (
                        <iframe
                            width="1710" height="581"
                            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                            title="Youtube Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    )
                }
            </div>
            <div>
                <CommentsContainer />
            </div>
        </div >

    )
}

export default Watch