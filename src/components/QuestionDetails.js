import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveAnswer} from '../actions/user'
import { Redirect } from 'react-router-dom';
class AnswerQuestions extends Component {
    state={
        isDisabled:true
    }
    onSiteChanged = () => {
        this.setState({
            isDisabled:false
        })
    }
    saveAnswerd = (e) => {  
        e.preventDefault()  
        const {dispatch, questions} = this.props
        if (document.getElementById('inlineRadio1').checked) {
            const Value = document.getElementById("inlineRadio1").value;
            dispatch(handleSaveAnswer(
                questions.id, 
                Value
             ))
          }else{
            const Value = document.getElementById("inlineRadio2").value;
            dispatch(handleSaveAnswer(
                questions.id, 
                Value
             ))
          }
        this.props.history.push(`/questions/${questions.id}`)
    }
    
    render() {
        if (this.props.badPath === true) {
            return <Redirect to="/NotFuond" />;
        }
        if (this.props.badPath === true) {
            return <Redirect to="/NotFuond" />;
        }
        const { questions ,questionAuthed , authedAnswerdQ1 , authedAnswerdQ2} = this.props
        const {optionOne , optionTwo} = questions
        
        return (
            <div className='container p-5 mt-5'>
                {authedAnswerdQ1.length === 0 && authedAnswerdQ2.length === 0
                ?<div className='card m-5'>
                <div className='card-header'><h3>Would You Rather</h3></div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-5 border-right'>
                                <img
                                src={questionAuthed.avatarURL}
                                alt={`Avatar of ${questionAuthed.name}`}
                                width='150'
                                />
                            </div>
                            <div className='col-md-7'>
                                <form onSubmit={this.saveAnswerd}>
                                    <p>{questionAuthed.name}</p>
                                    <div className="form-check form-check-inline d-block">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  value="optionOne"  onChange={this.onSiteChanged}/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">{questions.optionOne.text}</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="optionTwo"  onChange={this.onSiteChanged}/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">{questions.optionTwo.text}</label>
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary d-block mt-4" disabled  = {this.state.isDisabled}>Submit</button>
                                </form>
                            </div> 
                        </div>                         
                    </div>
                </div>
                :<div className='card m-5'>
                    <div className='card-header'>  
                        <h5>Asked by {questionAuthed.name}</h5>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-5 border-right'>
                                <img
                                src={questionAuthed.avatarURL}
                                alt={`Avatar of ${questionAuthed.name}`}
                                width='150'
                                />
                            </div>
                            <div className='col-md-7'>
                                <h3>Results</h3>
                                <div className='col-md-12 border rounded my-3 p-3'>
                                    <p className='text-success'> {authedAnswerdQ1.length === 1 && 'Your votes' }</p>
                                    <p>Wold you rather {optionOne.text}</p> 
                                    <p>{optionOne.votes.length} out of {optionOne.votes.length + optionTwo.votes.length} votes</p>
                                    <p>{optionOne.votes.length >0 ? (optionOne.votes.length * 100 ) / (optionOne.votes.length + optionTwo.votes.length): 0 }%</p>
                                </div>
                                <div className='col-md-12 border rounded my-3 p-3'>
                                    <p className='text-success'>{authedAnswerdQ2.length=== 1 && 'Your votes'}</p>
                                    <p>Wold you rather {optionTwo.text}</p> 
                                    <p>{optionTwo.votes.length} out of {optionOne.votes.length + optionTwo.votes.length} votes</p>
                                    <p>{optionTwo.votes.length >0 ? (optionTwo.votes.length * 100 ) / (optionOne.votes.length + optionTwo.votes.length): 0 }%</p>
                                </div>  
                            </div>  
                        </div>                         
                    </div>
                </div>
                }
            </div>
        )
    }
}
function mapStateToProps ({ authedUser, question, user }, props) {
    if (question[props.match.params.id] === undefined) {
        const badPath = true
       return {
        badPath
       }
      }else{
        const questions = question[props.match.params.id];
        const questionAuthed = user? user[questions.author] :null
        const authedUs = user[authedUser]
        const authedAnswerdQ1 = questions.optionOne.votes.filter(x => authedUs.id.includes(x))
        const authedAnswerdQ2 = questions.optionTwo.votes.filter(x => authedUs.id.includes(x))
        const badPath = false
        return {
            questions,
            questionAuthed,
            authedUs,
            authedAnswerdQ1,
            authedAnswerdQ2,
            badPath
        }
      }
}

export default connect(mapStateToProps)(AnswerQuestions) 
  