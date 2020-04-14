import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom';
class Question extends Component {
    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
      }
      loadQuestionDetails(e, questionId) {
        let path = `/questions/`+questionId;
        this.props.history.push(path);
      }

    render() {
        const { questions , userLogin, isAnswered} = this.props
        const { optionOne , id} = questions
        const { name, avatarURL } = userLogin

        return (
            <Fragment>
                <div className='card-header'><h3>{name} asks:</h3></div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-5 border-right'>
                            <img
                            src={avatarURL}
                            alt={`Avatar of ${name}`}
                            width='150'
                            />
                            <p className='pt-3 pl-4 mb-0'>{name}</p>
                        </div>
                        <div className='col-md-7'>
                            <p>Would you rather</p>
                            <p>{optionOne.text} or ...</p>
                            {isAnswered === true
                               ? <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.loadQuestionDetails(e, id)}> View Poll</button>
                               :<button type="button" className="btn btn-outline-secondary" onClick={(e) => this.loadQuestionDetails(e, id)}> Submit Poll </button> 
                            }

                        
                        </div>
                    </div>
                </div>
            </Fragment>           
        )
    }
}
function mapStateToProps ({ authedUser, question, user }, {id ,answerd}) {
    const questions = question[id];
    const userLogin = user? user[questions.author] :null
    const authedUs = user[authedUser]
    return {
        authedUs,
        questions,
        userLogin,
        answerd
    }
}

export default withRouter(connect(mapStateToProps)(Question))
  