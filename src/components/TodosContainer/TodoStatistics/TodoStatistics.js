import React from 'react';
import './TodoStatistics.scss';



class TodoStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        text TodoStatistics
        <br></br>
        <span>N items left </span>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>

        <button type="button">Clear completed</button>
      </React.Fragment>
    )
  }
}
export default TodoStatistics;