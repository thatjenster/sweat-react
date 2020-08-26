// Stateless component no data passed

import React from 'react'
import Summary from './Summary'

const Lists = ({programs}) => {
    return(
        <div className="lists section">
            {programs && programs.map(program => {
                return(
                    <Summary program={program} key={program.id}/>
                )
            })}
        </div>
    )
}

export default Lists;