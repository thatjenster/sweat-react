// Class component - storing in local state the user information

import React, { Component } from 'react'
import { createProgram } from './../../Store/actions/programsAction'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        createProgram: (program) => dispatch(createProgram(program))
    }
}

class Create extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProgram(this.state);
    }
    render() {
        return(
            <div className="container">
                <form className="logIn-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content Goes Here</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="create-btn">CREATE!</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Create);