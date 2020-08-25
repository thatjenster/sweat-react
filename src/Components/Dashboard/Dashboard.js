// Class components - Will be using STATE/LIFECYCLE and potentially HOOKS

import React, { Component } from 'react'
import Notice from './Notice'
import Lists from './../Projects/Lists'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Lists />
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notice />
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;