import React from 'react';
import './TodoItem.scss';



class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { id, value, handleDelBtn } = this.props;

    return (
      <React.Fragment>
        <input type="radio" id={id}></input>
        <span>{value}</span>
        <button type='button' onClick={() => handleDelBtn(id)}>X</button>
        <br/>
      </React.Fragment>
    )
  }
}
export default TodoItem;