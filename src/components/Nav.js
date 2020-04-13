import React ,{Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import user from '../user.svg'
class Nav extends Component {
    handleSubmit = () =>{
        const {dispatch} = this.props
        dispatch(setAuthedUser(null))
      }
    render() {
        const {userauth} = this.props
  
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' className='nav-link' activeClassName='active'>
                                Add Question
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/leaderBoard' className='nav-link' activeClassName='active'>
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>
                    <span className='navbar-brand mr-3'>{ userauth !== undefined && userauth.name}</span>
                        <img
                            src={ userauth !== undefined ? userauth.avatarURL : user}
                            alt={`Avatar of ${ userauth !== undefined && userauth.name}`}
                            width='35'
                            />
                        <Link to='/' onClick={this.handleSubmit} className='nav-link text-muted'>
                            LogOut 
                        </Link>
                </div>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser, question, user }) {
    const userauth = user[authedUser]
    console.log("auther user :",authedUser)
    return {
        authedUser,
        question,
        user,
        userauth
    }
}

export default connect(mapStateToProps)(Nav) 