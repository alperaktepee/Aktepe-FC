import React from "react";
import './Record.css';

function Records(props) {
  return (
    <div className="record-container">
      <h2> <span className="recordlabel">Played :</span>   {props.name} - {props.played} </h2>
      
      <div className="recordimg">{props.playedimg}</div>
      <h2> <span className="recordlabel">Goals :</span>   {props.goalname} - {props.goalcount}  </h2>
      <div className="recordimg">{props.goalimg}</div>
      <h2> <span className="recordlabel">Assists :</span>   {props.assistname} - {props.assistcount}</h2>
      <div className="recordimg">{props.assistimg}</div>
    </div>
  );
}
export default Records;
