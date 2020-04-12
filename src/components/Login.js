import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
class Login extends Component {
    handleSubmit = () =>{
        const slecteValue = document.getElementById("exampleFormControlSelect1").value
        console.log("slecteValue",slecteValue)
        const {dispatch} = this.props
        dispatch(setAuthedUser(slecteValue)) 
      }
    render() {
        return (
            <div className='container d-flex justify-content-center p-5 mt-5'>
                <div className='card w-75 '>
                    <div className='card-header text-center'>
                        <h3>Welcome to the Would You Rather App!</h3> 
                        <p className='ttext-muted'>Passing sign in to continue</p>
                    </div>
                    <div className='card-body text-center'>
                        <h4 className='text-success'>Sign in</h4>
                        <select className="form-control" id="exampleFormControlSelect1">
                        {this.props.users.map((user) => (
                            <option key={user.id} value={user.id}>
                                { user.name} 
                            </option>
                        ))}
                        </select>                        
                        <button type="button" className="btn btn-outline-secondary mt-4 w-100" onClick={this.handleSubmit}>Sign in</button>
                    </div>                         
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ authedUser, question, user }) {
    const users = Object.values(user);
    return {
        authedUser, question, users
    
    }
}

export default connect(mapStateToProps)(Login) 
  