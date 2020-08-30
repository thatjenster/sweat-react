// Class components - Will be using STATE/LIFECYCLE and potentially HOOKS

import React, { Component } from 'react'
import Notice from './Notice'
import Lists from '../Programs/Lists'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const { programs, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/header' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Lists programs={programs}/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notice notifications={notifications}/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        programs: state.firestore.ordered.programs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'programs', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 4, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);