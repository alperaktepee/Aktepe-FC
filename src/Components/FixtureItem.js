import React from "react";
import "./FixtureItem.css";
function FixtureItem(props) {

 
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });



  return (
    <div className="fixture-item">
      <div className="fixture-date">
        <div className="fixture-date__month">{month}</div>
        <div className="fixture-date__day">{day}</div>
      </div>
       <h2 className="rivalteam">{props.team}  </h2> 
        <div className="fixture-item__result"> <div>{props.status} </div><div>{props.result}</div><div>{props.score}</div>  </div>
        
    
    </div>
   
  );
}

export default FixtureItem;
