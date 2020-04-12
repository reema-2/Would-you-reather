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
                        <p className={this.state.activNavUnq} onClick={(e) => this.unanswerdQuestions()} >Unanswerd Questions</p>
                    </li>
                    <li className="nav-item">
                        <p className={this.state.activNavQ} onClick={(e) => this.answerdQuestions()} href='#'>Answerd Questions</p>
                    </li>
                </ul>
                </div>
                {   this.state.unanswerdView
                        ?this.props.unanswerdQuestionsIds.map((id) => (
                        <div className='card m-5' key={id}>
                        <Question id={id} answerd={'unanswerd'}/>
                        </div>
                        ))
                        :this.props.answerdQuestionsIds.map((id) => (
                        <div className='card m-5' key={id}>
                        <Question id={id} answerd={'answerd'}/>
                        </div>
                        ))
                }
            </div>
        )
    }
}

function mapStateToProps ({ question , user, authedUser }) {

    const authedUsr = user[authedUser]

    const answeredQuestions = Object.keys(authedUsr.answers)
    .sort((a,b) => question[b].timestamp - question[a].timestamp)

    const unanswerdQuestions = Object.keys(question).filter(x => !answeredQuestions.includes(x));
    
    return {
        answerdQuestionsIds:answeredQuestions,
        unanswerdQuestionsIds:unanswerdQuestions,
        authedUsr
    }
}

export default connect(mapStateToProps)(Home) 
  