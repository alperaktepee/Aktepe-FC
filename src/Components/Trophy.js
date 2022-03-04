import React from 'react'
import './Trophy.css';

function Trophy(props) {
  return (
    <div className='cupcontainer'>
       <div className='card-cup'>
       <div className='cups'>{props.img}</div> 
        <p className='cuptitle'>{props.year} {props.title} {props.status}</p>
        </div>
    </div>
  )
}

export default Trophy;