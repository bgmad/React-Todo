import React from 'react';

export default function Todo (props) {
    return (
      <div onClick={props.handleToggle}>
        {props.item.completed ? <strike>{props.item.task}</strike> : <p>{props.item.task}</p>}
      </div>
    )
}