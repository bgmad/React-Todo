import React from 'react';

export default function Todo (props) {
    const clickHandle = e => {
        props.handleToggle(props.item.id)
    }

    return (
      <div onClick={clickHandle}>
        {props.item.completed ? <strike>{props.item.task}</strike> : <p>{props.item.task}</p>}
      </div>
    )
}