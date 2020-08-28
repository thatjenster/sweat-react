// Class components - Will be using STATE/LIFECYCLE and potentially HOOKS

import React, { Component } from 'react'
import Notice from './Notice'
import Lists from '../Programs/Lists'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        console.log(this.props);
        const { programs } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Lists programs={programs}/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notice />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        programs: state.firestore.ordered.programs
    }
}

export default compose(
    firestoreConnect(() => ['programs']),
    connect(mapStateToProps)
    )(Dashboard);