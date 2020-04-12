import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Question extends Component {
  
    render() {
        const { questions , userLogin, answerd} = this.props
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
                        </div>
                        <div className='col-md-7'>
                            <p>{name}</p>
                            <p>{optionOne.text} or ...</p>
                            {answerd === 'answerd'
                                ?<Link to={`/questions/${id}`}>
                                <button type="button" className="btn btn-outline-secondary"> View Poll</button>
                                </Link>
                                :<Link to={`/questions/${id}`}>
                                <button type="button" className="btn btn-outline-secondary"> View Poll</button>
                                </Link>                  
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

export default connect(mapStateToProps)(Question) 
  