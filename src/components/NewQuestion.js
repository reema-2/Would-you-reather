import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/question'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText:'',
      }
 
      handleChangeTextOne = (e) => {
        const optionOneQText = e.target.value
    
        this.setState(() => ({
            optionOneText: optionOneQText
        }))
      }
      handleChangeTextTwo = (e) => {
        const optionTwoQText = e.target.value
    
        this.setState(() => ({
            optionTwoText: optionTwoQText
        }))
      }

      handleSubmit = (e) => {
       e.preventDefault()
    
        const {optionOneText ,optionTwoText} = this.state
        const {authedUser} = this.props
    
        this.props.AddQuestion( optionOneText, optionTwoText, authedUser )

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
        }))
        this.props.history.push('/')
      }

    render() {
        
        return (
            <div className='container d-flex justify-content-center p-5 mt-5'>
                <div className='card w-75 '>
                    <div className='card-header text-center'>
                       <h3>Create New Question</h3> 
                    </div>
                    <div className='card-body text-center'>    
                        <p className='d-block'>Complete the question</p>
                        <h5>Would you rethar...</h5>
                        <form onSubmit={this.handleSubmit}> 
                            <input type="text"   onChange={this.handleChangeTextOne}  className="form-control" placeholder='Enter Option One Text Here'/>  
                            <p>______________________or_______________________</p>
                            <input type="text" onChange={this.handleChangeTextTwo} className="form-control" placeholder='Enter Option Two Text Here'/>  
                            <button type="submit" className="btn btn-secondary d-block mt-4 w-100" onClick={this.saveAnswerd} >Submit</button>
                        
                        </form>
                    </div>                         
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ question , user, authedUser }) {
    return {
        question , user, authedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddQuestion: (optionOneText, optionTwoText, authedUser ) => { 
        dispatch(handleAddQuestion( optionOneText, optionTwoText, authedUser ))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion) 
  