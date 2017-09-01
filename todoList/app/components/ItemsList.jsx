import React from 'react';

export default class ItemsList extends React.Component {
    render() {
        let listItems = this.props.items.map((item,i) => {
            return (
                <li key={i}>
                    <div className="text">{item}</div>
                    <button onClick={this.props.clickAction.bind(this,i)} className="btn btn-danger">Del</button>
                </li>
            );
        });
        return <ul>{listItems}</ul>
    }
}