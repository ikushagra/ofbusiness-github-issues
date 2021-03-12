import React from 'react'

export default function Button(props){
return(
    <div className="button-container" onClick={props.onChildClick}>
    {props.name} 
    </div>
)
}