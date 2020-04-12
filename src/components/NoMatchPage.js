import React, { Component } from 'react'

class NoMatchPage extends Component {
    handleSubmit = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='container justify-content-center p-5 mt-5'>
                <h1 className=''>Uh Ohhh !</h1>
                <h2 className='mt-3'>We cant find the page that you're looking for </h2>
                <button type="button" className="btn btn-outline-secondary mt-5" onClick={this.handleSubmit}>Back to home</button>
            </div>
        )
    }
}

export default NoMatchPage
  