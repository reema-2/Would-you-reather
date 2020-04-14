import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './home'
import QuestionDetails from './QuestionDetails'
import NoMatchPage from './NoMatchPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

function Routes() {
  return (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/questions/:id' component={QuestionDetails} />
    <Route exact path='/add' component={NewQuestion}/>
    <Route  exact path='/LeaderBoard' component={LeaderBoard}/> 
    <Route path='/notFuond' component={NoMatchPage}/> 
      }
      <Route component={NoMatchPage} />
    </Switch>
  )
}


export default Routes;