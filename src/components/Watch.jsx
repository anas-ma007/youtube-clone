import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './commentsContainer'


function Watch() {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"), 'use params');


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='flex flex-col'>

            <div className=''>
                {
                    <iframe
                        width="1200" height="581"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="Youtube Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                }

            </div>

            <div>
                <CommentsContainer />
            </div>
        </div>

    )
}

export default Watch