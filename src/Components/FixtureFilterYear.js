 
import React from 'react'
import './FixtureFilter.css';
function FixtureFilterYear(props) {
   
      
  return (
  
         <div className='fixture-filter'>
      <div className='fixture-filter__control'>
        <select value={props.selected} onChange={props.onChangeFilter}>
        <option value='2024'>2024</option>
          
          <option value='2023'>2023</option>

          <option value='2022'>2022</option>
  
        </select>
      </div>
 
    </div>
  )
}
 
export default FixtureFilterYear;