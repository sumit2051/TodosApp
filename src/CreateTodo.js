import React from 'react'
import _ from 'lodash'
import {Input, Button} from 'semantic-ui-react'

export default class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null
        }
    }

    onCreate(event){
        event.preventDefault();
       
        const createInputValue = event.target.taskname.value
        const validateInput = this.validateInput(createInputValue)

        if(validateInput){
            console.log(validateInput)
            this.setState({
                error : validateInput
            })
            return
        }
        this.setState({error: null})
        this.props.createTask(createInputValue)
        event.target.taskname.value = null;
    }

    validateInput(task){
        console.log(this.props.todos)
    if(_.find(this.props.todos, todo => todo.task === task)){
        return "Task already exists"
    }
    else{
        return null
    }
    }

    renderError(){
        if(!this.state.error){
            return null
        }
        return(
        <div style = {{color : "red"}}>{this.state.error}</div>
        )
    }

    render(){
        return(
            <form onSubmit = {this.onCreate.bind(this)}>               
               <Input type = "text" placeholder = "Task Name" required name = "taskname"  />
                <Button positive size='large' style = {{marginLeft : '2em'}} >Create</Button>
                {this.renderError()}
            </form>
           
        )
    }
}