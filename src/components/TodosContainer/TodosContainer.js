import React from 'react';
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import TodoStatistics from './TodoStatistics/TodoStatistics'


class TodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'some key', value: '' },
        { key: 'some key', value: '' }
      ]
    }
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <AddTodo />
        <TodoList />
        <TodoStatistics />
      </React.Fragment>
    )
  }
}
export default TodosContainer;