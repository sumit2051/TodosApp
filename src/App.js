import React from 'react';
import './App.css';
import TodosList from './TodosList'
import CreateTodo from './CreateTodo';
import _ from 'lodash'
import Header from './Header'
import {Container} from 'semantic-ui-react'


const todos = [
{
  task : 'Learn React',
  isCompleted : false
},
{
  task : 'Learn PTE',
  isCompleted : false
},
{
  task : 'Eat food',
  isCompleted : true
}
]


export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        todos,
      }
    }

    render(){
      return(
        <Container text style={{ marginTop: '4em' }}>
          <Header />
          <h1>Todos List of Sumit</h1>
          <CreateTodo 
          createTask = {this.createTask.bind(this)}
          todos = {this.state.todos}
          />
          <TodosList 
          todos = {this.state.todos}
          taskToggle = {this.taskToggle.bind(this)}
          saveTask = {this.saveTask.bind(this)}
          deleteTasks = {this.deleteTask.bind(this)}
          />
        </Container>
      )
    }

    deleteTask(task){      
      _.remove(this.state.todos, todo => todo.task === task)
      this.setState({ todos : this.state.todos})
    }

    saveTask(oldTask, newTask){
      const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
      foundTodo.task = newTask
      this.setState({todos : this.state.todos})

    }
    taskToggle(task){
      const foundTodo = _.find(this.state.todos, todo => todo.task === task)
      foundTodo.isCompleted = !foundTodo.isCompleted
      this.setState({todos : this.state.todos})

    }
    createTask(task){
      this.state.todos.push({
        task,
        isCompleted : false
    });
    
    this.setState({ todos : this.state.todos})
    
    }
}
