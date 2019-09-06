import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';



class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        text TodoList
        <br></br>
      </React.Fragment>
    )
  }
}
export default TodoList;