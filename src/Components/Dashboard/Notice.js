// Stateless component 

import React from 'react'

const Notice = (props) => {
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notice">
                        <li>Notifications</li>
                        <li>Notifications</li>
                        <li>Notifications</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notice;