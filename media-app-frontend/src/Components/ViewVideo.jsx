import React from 'react'
import VideoCard from './VideoCard'

function ViewVideo() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <VideoCard />
        </div>
        <div className="col">
          <VideoCard />
        </div>
        <div className="col">
          <VideoCard />
        </div>
      </div>
    </div>
  )
}

export default ViewVideo