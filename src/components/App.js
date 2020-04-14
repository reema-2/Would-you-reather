import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import { handleInitialData } from '../actions/shared'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import '../App.css'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    <Router>  
    <Switch>
      {this.props.authedUser === null
        ?<Fragment>
          <Nav />
          <LoadingBar/>
          <Login/> 
        </Fragment> 
        :<Fragment>
          <Nav />
          <Routes />
        </Fragment>
      }
      </Switch>
  </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App) 

