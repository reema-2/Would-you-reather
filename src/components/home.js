import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
class Home extends Component {

    state={
        unanswerdView :true,
        activNavUnq: 'mb-0 nav-link active',
        activNavQ: 'mb-0 nav-link'
    }

    unanswerdQuestions= ()=>{
        this.setState({
            unanswerdView: true,
            activNavUnq: 'mb-0 nav-link active',
            activNavQ: 'mb-0 nav-link'
        })
    } 
    answerdQuestions= ()=>{
        this.setState({
            unanswerdView: false,
            activNavUnq: 'mb-0 nav-link',
            activNavQ: 'mb-0 nav-link active'
        })
    } 

    render() {
        return (
            <div className='container p-5 mt-5'>
                <div className="text-center">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <p className={this.state.activNavUnq} onClick={(e) => this.unanswerdQuestions()} >Unanswered Questions</p>
                    </li>
                    <li className="nav-item">
                        <p className={this.state.activNavQ} onClick={(e) => this.answerdQuestions()} href='#'>Answered Questions</p>
                    </li>
                </ul>
                </div>
                {   this.state.unanswerdView
                        ?this.props.unanswerdQuestionsIds.map((id) => (
                        <div className='card m-5' key={id}>
                        <Question id={id} isAnswered={false}/>
                        </div>
                        ))
                        :this.props.answerdQuestionsIds.map((id) => (
                        <div className='card m-5' key={id}>
                        <Question id={id} isAnswered={true}/>
                        </div>
                        ))
                }
            </div>
        )
    }
}

function mapStateToProps ({ question , user, authedUser }) {

    const loginUser = user[authedUser]

    const answeredQuestions = Object.keys(loginUser.answers)
    .sort((a,b) => question[b].timestamp - question[a].timestamp)

    const unanswerdQuestions = Object.keys(question).sort((a,b) => question[b].timestamp - question[a].timestamp).filter(x => !answeredQuestions.includes(x));
    
    return {
        answerdQuestionsIds:answeredQuestions,
        unanswerdQuestionsIds:unanswerdQuestions,
        loginUser
    }
}

export default connect(mapStateToProps)(Home) 
  