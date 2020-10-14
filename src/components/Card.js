import React from 'react'

export default function Card({trivium}) {
    return(
        <div className="trivia-card">
        <h2>{trivium.question}</h2> 
        <h3>Correct Answer: {trivium.correct_answer}</h3>
    </div>
    )
}