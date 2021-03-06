// Stateless component no data passed

import React from 'react'
import Summary from './Summary'
import { Link } from 'react-router-dom'

const Lists = ({ programs} ) => {
    return(
        <div className="lists section">
            {programs && programs.map(program => {
                return(
                    <Link to={'/program/' + program.id} key={program.id}>
                    <Summary program={program} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Lists;