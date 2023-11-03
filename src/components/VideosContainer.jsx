import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCards from './VideoCards'

function VideosContainer() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <React.Fragment>
      <div className='flex flex-wrap-reverse'  >

        {videos.map(video=>  <VideoCards key={video.id} info={video} /> )}
       
      </div>
    </React.Fragment>
  )
}

export default VideosContainer