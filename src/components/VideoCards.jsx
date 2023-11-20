import React from 'react'

const VideoCards = ({info}) => {
  // console.log(info, "infooo log")
  const { snippet, statistics } = info || {}
  const {thumbnails, title, description, channelTitle} = snippet || {}
 
  return (  

    <React.Fragment>
      <div className='m-2 p-2 w-96 flex-wrap-reverse shadow-lg hover:w-[24.5rem] hover:shadow-gray-600'>
        <img className='rounded-lg m-1' src={thumbnails.high.url} alt="thumbanil" />
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