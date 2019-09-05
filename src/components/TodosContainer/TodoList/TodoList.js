import React from 'react';
import TodoItem from './TodoItem/TodoItem';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <React.Fragment>
        <TodoItem />
        text TodoList
      </React.Fragment>
    )
  }
}
export default TodoList;