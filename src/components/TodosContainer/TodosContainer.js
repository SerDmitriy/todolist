import React from 'react';
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import TodoStatistics from './TodoStatistics/TodoStatistics'
import './TodosContainer.scss';
import { genKey } from '../../utilites/index'




class TodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  addItem = value => this.setState(state => ({ data: state.data.concat([{ key: genKey(), value }]) }));

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <AddTodo addItem={this.addItem} />
        <TodoList />
        <TodoStatistics />
      </React.Fragment>
    )
  }
}
export default TodosContainer;