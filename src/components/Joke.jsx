import React from 'react'

export default function Joke(props) {
    return (
        <div>
            <h1>{props.setup}</h1>
            <p>{props.punchline}</p>
        </div>
    )
}