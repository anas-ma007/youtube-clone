import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import ShimmerHome from './HomeShimmer'
// import { useDispatch, useSelector } from 'react-redux'
// import { HomeVideos } from '../utils/videoSlice'

function VideosContainer() {
  const [videos, setVideos] = useState([])
  // const dispatch = useDispatch()

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    // console.log(data, "data in api");
    const json = await data.json()
    console.log(json);
    setVideos(json.items)
    // dispatch(HomeVideos({videos : json.items}))

  }
  // const videos= useSelector(state=>state.videos)
  if ( !videos || videos.length === 0) {
    const shimmerItems = Array.from({ length: 10 }, (_, index) => index);
    return (
      <React.Fragment>
        <div className='flex flex-wrap'>
        {shimmerItems.map((item) => (
          <ShimmerHome key={item} />
        ))}
        </div> 
      </React.Fragment>
    );
    
  } else {
    return (
      <React.Fragment>
        <div className='flex flex-wrap px-10'>
          {  videos?.map((video) => (
              <Link key={video.id} to={"watch?v=" + video.id}>  <VideoCards info={video} /> </Link>))}

        </div>
      </React.Fragment>
    )
  }
  // console.log(data, "data in use selector");
}

export default VideosContainer