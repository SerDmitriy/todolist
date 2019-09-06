import React from 'react';
import './TodoItem.scss';



class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <input type="radio"></input>
        <span>text span item</span>
        <button type='button'>X</button>
        <br></br>
      </React.Fragment>
    )
  }
}
export default TodoItem;