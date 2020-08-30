// Stateless component 

import React from 'react'
import moment from 'moment'

const Notice = (props) => {
    const { notifications } = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notice">
                        { notifications && notifications.map(item => {
                            return( 
                                <li key={item.id}>
                                    <span className="purple-text">{item.user}</span>
                                    <span>{item.content}</span>
                                    <div>
                                    {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notice;