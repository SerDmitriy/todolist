import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';



class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { data, handleDelBtn } = this.props;
    return (
      <React.Fragment>
        {data.map(item => <TodoItem handleDelBtn={handleDelBtn} key={item.id} {...item} />)}
        <br />
      </React.Fragment>
    )
  }
}
export default TodoList;