import React from 'react'
import './TagButton.css';

function TagButton({txt,selected}) {
  return (
    <div className={`tagbutton ${selected?"select":""}`}>{txt}</div>
  )
}

export default TagButton