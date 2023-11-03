import React from 'react'

const VideoCards = ({info}) => {
  // console.log(info, "infooo log")
  const { snippet, statistics } = info || {}
  // console.log(snippet, "snippet log");
  // console.log(statistics, "statistics log");
  const {thumbnails, title, description, channelTitle} = snippet || {}
  // console.log(thumbnails.high.url, title, channelTitle, "thumbnails, title, description, channelTitle");
 

  return (

    <React.Fragment>
      <div className='m-2 p-2 w-72 flex-wrap-reverse shadow-lg'>
        <img className='rounded-lg' src={thumbnails.high.url} alt="thumbanil" />
        <ul>
          <li className='font-bold'>{title}</li>
          <li className=''>{channelTitle}</li>
          <li className='text-xs' >{statistics.viewCount} Views</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default VideoCards