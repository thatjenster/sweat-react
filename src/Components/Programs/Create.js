// Class component - storing in local state the user information

import React, { Component } from 'react'
import { createProgram } from './../../Store/actions/programsAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Create extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProgram(this.state);
        this.props.history.push('/dashboard');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/header' />
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
                        <button className="create-btn btn">CREATE!</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProgram: (program) => dispatch(createProgram(program))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);