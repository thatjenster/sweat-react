// Stateless component - only data being passed down
import React from 'react'

const Summary = ({program}) => {
    return(
        <div className="card z-depth-0 summary">
            <div className="card-content">
                <span className="card-title">{program.title}</span>
                <p>Posted by UNKNOWN</p>
                <p>DATE INSERT</p>
            </div>
        </div>
    )
}

export default Summary;