import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

    render() {


        return (
            <div className='p-5'>
                <p>{this.props.userauth.name}</p>
                {   
                    this.props.users.map((user) => (
                    <div className='card m-5' key={user.id}>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-4 border-right'>
                                    <img
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.name}`}
                                    width='150'
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <h4>{user.name}</h4>
                                    <p>Created Questions: {user.questions.length}</p>
                                    <p>Answered Questions: {Object.keys(user.answers).length}</p>
                                </div>
                                <div className='col-md-4 border rounded p-0 text-center'>
                                    <div className='card-header p-3 text-center'> 
                                    <h4>Score</h4>
                                    </div>
                                    <h1>{user.questions.length + Object.keys(user.answers).length}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps ({ question , user, authedUser }) {
    const userauth = user[authedUser]
    const userScore = user =>
      Object.keys(user.answers).length + user.questions.length;

    return {
        userauth,
        users: Object.values(user).sort((a, b) => userScore(b) - userScore(a))
    }
}

export default connect(mapStateToProps)(LeaderBoard) 
  