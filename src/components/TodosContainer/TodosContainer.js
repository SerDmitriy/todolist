import React from 'react';
import AddTodo from './AddTodo/AddTodo'


class TodosContainer extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.data = [
      {key: 'some key', value: ''},
      {key: 'some key', value: ''}
    ]
  }
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <TodoItem />
      </div>
    )
  }
}
export default TodosContainer;