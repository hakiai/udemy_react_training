import React from 'react';

export default class ListItem extends React.Component {

  onChangeBox(event) {
    console.log("onChangeBox");
    this.props.completeTodo(event.target.value);
  }

  onClickDeleteButton(event) {
    this.props.deleteTodo(this.props.data.id);
  }

  render() {
    return (
      <li className="todo-list-item">
        <input type="checkbox"
          value={this.props.data.id}
          onChange={this.onChangeBox.bind(this)} />
        {this.props.data.label}
        <button
          className="delete-button"
          onClick={this.onClickDeleteButton.bind(this)}>×</button>
      </li>
    )
  }
}
