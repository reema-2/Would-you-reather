import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import '../App.css'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
     const { notLoggedIn } = this.props;
    return (
      <Router>
      <Fragment>     
          <Nav/>
          <LoadingBar/>
          <Routes notLoggedIn={notLoggedIn}/>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 

