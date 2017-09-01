import React from 'react';
import TodoForm from './TodoForm.jsx';
import ItemsList from './ItemsList.jsx';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[
                'yuer love xiaoke',
                'xiaoke love yuer'
            ]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    addItem (item) {
        let newItems = this.state.items;
        newItems.push(item);
        this.setState({item: newItems});
    }
    deleteItem (idx) {
        let newItems = this.state.items;
        newItems.splice(idx,1);
        this.setState({item: newItems});
    }

    render(){
        return (
            <div className="main">
                <div className="todo-list">
                    <h1>To-Do <small>List</small></h1>
                    <TodoForm submitAction={this.addItem} />
                    <ItemsList items={this.state.items} clickAction={this.deleteItem} />
                </div>
            </div>            
        )
    }
}