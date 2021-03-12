import React from 'react'

import './wall.css'


export default function Wall({issuesData}){
    return(
        <div className='wall-container'>
            <ul className="unordered-list">
                {issuesData.map(value => (
                    <li key={value.id}>{value.id}</li>
                ))}
            </ul>
        </div>
    )
}