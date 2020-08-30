// Stateless component - only data being passed down
import React from 'react'
import moment from 'moment'

const Summary = ({program}) => {
    return(
        <div className="card z-depth-0 summary">
            <div className="card-content">
                <span className="card-title">{program.title}</span>
                    <p>Posted by {program.authorFirstName} {program.authorLastName}</p>
                <p>{ moment(program.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
    )
}

export default Summary;