import React from 'react'
import { Table, Button } from 'semantic-ui-react'

export default class TodosListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing : false
        }
        this.renderAction = this.renderAction.bind(this)
        this.renderTask = this.renderTask.bind(this)
    }    

    renderAction(){
    if(this.state.isEditing){
        return( 
        <Table.Cell>
            <Button primary  onClick = {this.saveTask.bind(this)} >Save</Button>
            <Button onClick = {this.onEditCancel.bind(this)} >Cancel</Button>
            
        </Table.Cell>
        )
    }
    return(
        <Table.Cell>
            <Button positive onClick = {this.editTask.bind(this)}>Edit</Button>
            <Button onClick = {this.props.deleteTasks.bind(this, this.props.task)}>Delete</Button>
        </Table.Cell>
    )

    }

    renderTask(){
    const { task, isCompleted } = this.props
    
    const taskStyle = {
        color : isCompleted ? 'green' : 'red',
        cursor : "pointer"
    }

    if(this.state.isEditing)
    {
        return <div class="ui input"><input type = "text" defaultValue = {task} required ref = "editInput" /></div> 
    }

    return <Table.Cell style = {taskStyle} onClick = {this.props.taskToggle.bind(this, task)}>{task}</Table.Cell>
    }

    editTask(){
        this.setState({
            isEditing : true
        })
    }

    onEditCancel(){
        this.setState({
            isEditing : false
        })
    }

    saveTask(event){
        event.preventDefault();
        
        const oldTask = this.props.task
        
        const newTask = this.refs.editInput.value
             
        this.props.saveTask(oldTask,newTask);

        this.setState({isEditing : false})
    }
    

    render(){
        return(
            <Table.Row>
                {this.renderTask()}
                {this.renderAction()}
            </Table.Row>                        
            
        )
    }
}