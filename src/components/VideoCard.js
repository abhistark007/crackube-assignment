import React from 'react'
import './VideoCard.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function VideoCard({thumbnail,tag,timestamp,title,description,gridView}) {
  return (
    <div className={`${gridView?"videocard":"videocard__col"}`}>
        <img src={thumbnail} alt={title} className={`${gridView?"videocard__image":"videocard__image__col"}`}/>
        <div className={`${gridView?"gv1":"cv1"}`}>
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

    </div>
  )
}

export default VideoCard