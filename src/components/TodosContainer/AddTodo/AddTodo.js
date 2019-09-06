import React from 'react';
import './AddTodo.scss';


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
      errorMsg: false,
      textErrorMsg: 'This field is required'
    }
  }

  addTodoValue = ({ keyCode, target: { name } }) => {
    const { addItem } = this.props
    const { todoValue } = this.state

    if (keyCode === 13) {
      this.validateInput(todoValue)

      if (todoValue && todoValue.length !== 0) {
        addItem(todoValue)
        this.clearTodoValue(name)
      }
    }
  }

  handleChangeTodoValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
    this.validateInput(value)
  }

  clearTodoValue = name => this.setState({ [name]: '' })

  // validateInput = value => this.setState({ errorMsg: value.length === 0 ? true : false })

  validateInput = value => {
    let newErrorMsg = true;
    
    const re = /^[a-zA-Z0-9]{4,25}$/;
    if (value.length === 0) {newErrorMsg = false}
    if (!re.test(String(value))) {
      console.log(!re.test(String(value).toLowerCase()));
      this.state.textErrorMsg = 'You need to input only a-z A-Z 0-9 -_ ?!@ "space" => 4-25 symbols';
      newErrorMsg = false
    }
    this.setState({ errorMsg: newErrorMsg})
  }


  render() {
    const { todoValue, errorMsg } = this.state

    return (
      <div>
        <span>></span>
        <input
          value={todoValue}
          name="todoValue"
          onChange={this.handleChangeTodoValue}
          onKeyUp={this.addTodoValue}
          placeholder="What needs to be done?"
        ></input>
        {errorMsg ? <span>This {this.state.textErrorMsg}</span> : null}
        <br></br>
      </div>
    )
  }
}

export default AddTodo;
