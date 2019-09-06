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

  addItem = value => this.setState(state => ({ data: state.data.concat([{ id: genKey(), value }]) }));
  delItem = key => {
    let newState = 
    this.setState()
  }

  handleDelBtn = e => {
    console.dir(e.target); 
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <AddTodo addItem={this.addItem} />
        <TodoList handleDelBtn={this.handleDelBtn} data={data} />
        <TodoStatistics />
      </React.Fragment>
    )
  }
}
export default TodosContainer;