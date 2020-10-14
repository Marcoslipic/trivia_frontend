import React from 'react'

export default function CardBack({trivium}) {
    return(
        <div className="card-back">
        <h2>{trivium.correct_answer}</h2> 
    </div>
    )
}