import React from "react";
import "./SquadItem.css";

function SquadItem(props) {
  return (
    <div className="containerplayers">
      <div className="players">
        <div className="imagesplayers">{props.img}</div>
        <div className="shirtandname">
         <span className="shirtNumber"> {props.shirtNumber} </span> {props.name}
        </div>
        <div className="position">
          {props.position} - {props.nationality}
        </div>
      </div>
    </div>
  );
}
export default SquadItem;
