import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Details = (props) => {
    const { program } = props;
    console.log(props);
    if (program) {
        return(
        <div className="container section details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">{program.title}</span>
                    <p>{program.content}</p>
                    <div className="card-action">
                        <div>{program.authorFirstName} {program.authorLastName}</div>
                        <div>DATED</div>
                    </div>
                </div>
            </div> 
        </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Program :)</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const programs = state.firestore.data.programs;
    const program = programs ? programs[id] : null;
    return {
        program: program
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['programs'])
)(Details);