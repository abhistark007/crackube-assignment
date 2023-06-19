import React from 'react'
import './VideoCard.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function VideoCard({thumbnail,tag,timestamp,title,description}) {
  return (
    <div className='videocard'>
        <img src={thumbnail} alt={title}/>
        <div className="videocard__tag_and_time">
            <div className="videocard__tag">{tag}</div>
            <div className="videocard__time">{timestamp}</div>
        </div>

        <div className="videocard__title">{title}</div>

        <div className="videocard__desc">{description}</div>

        <div className="videocard__bottom">
            <p>Read More </p>
            <ArrowForwardIcon/>
        </div>

    </div>
  )
}

export default VideoCard