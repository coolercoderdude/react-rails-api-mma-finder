import React from 'react';
import { Link } from 'react-router-dom';

const FighterDetails = (props) => {
  debugger;
  return (
    <div>
      <h1>{props.fighter.name}</h1>
      <ul>
        <p>Age: {props.fighter.age}</p>
        <p>Weight Class: {props.fighter.weight_class}</p>
        <p>Hometown: {props.fighter.hometown}</p>
        <Link style={{ marginRight: '12px' }} key={props.fighter.id} to={`/fighters/${props.fighter.gym_id}`}>{props.fighter.name}</Link>
      </ul>
    </div>
  )
}

export default FighterDetails;