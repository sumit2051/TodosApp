import React from 'react'
import TodosHeaderList from './TodosHeaderList'
import TodosListItem from './TodosListItem'
import _ from 'lodash'
import {  Table } from 'semantic-ui-react'

export default class TodosList extends React.Component{
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this)
        
    }
    renderItem(){   
        const props = _.omit(this.props, "todos")   
        return _.map(this.props.todos, (todo,index) => 
        <TodosListItem 
        key = {index}
        {...todo}
        {...props}
        />
        )
    }

    render(){
        return(
            <Table fixed > 
                <Table.Header>
                    <TodosHeaderList />
                </Table.Header> 
                <Table.Body>
                    {this.renderItem()}
                </Table.Body> 
            </Table>
        )
    }
}