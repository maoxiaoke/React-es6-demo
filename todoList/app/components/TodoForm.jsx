import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {task:''};
        this.updateText = this.updateText.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    updateText (e){
        this.setState({task:e.target.value});
    }
    submitForm (e){
        e.preventDefault();
        let item = e.target[0].value;

        if(!item) {
            alert('Please enter a task');
        }else {
            this.props.submitAction(item);
            this.setState({task: ''});
        }
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="todo-form">
                <input type="text" className="form-control" placeholder="enter task" onChange={this.updateText} value={this.state.task} />
                <input type="submit" className="btn btn-primary self-btn" />
            </form>
        );
    }

}