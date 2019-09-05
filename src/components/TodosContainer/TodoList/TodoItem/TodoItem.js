import React from 'react';


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <React.Fragment>
        text TodoItem
      </React.Fragment>
    )
  }
}
export default TodoItem;