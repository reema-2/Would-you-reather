import React,{Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import Home from './home'
import QuestionDetails from './QuestionDetails'
import NoMatchPage from './NoMatchPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'

function Routes(props) {
  return (
    <Switch>
      { props.notLoggedIn 
      ?<Route exact path='/' component={Login} />
      :<Fragment>
          <Route exact path='/' component={Home} />
          <Route exact path='/questions/:id' component={QuestionDetails} />
          <Route exact path='/add' component={NewQuestion}/>
          <Route  exact path='/leaderBoard' component={LeaderBoard}/> 
          <Route path='/notFuond' component={NoMatchPage}/> 
        </Fragment>
      }
        <Route component={NoMatchPage} />
    </Switch>
  )
}


export default Routes;