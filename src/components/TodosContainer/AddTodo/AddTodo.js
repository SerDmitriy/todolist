import React from 'react';
import './AddTodo.scss';
import { TEXT_ERR_MSG }  from '../../../constants/constants'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
      errorMsg: TEXT_ERR_MSG.textErrReq
    }
  }

  addTodoValue = ({ keyCode, target: { name } }) => {
    const { addItem } = this.props
    const { todoValue } = this.state

    if (keyCode === 13) {
      this.validateInput(todoValue)

      if (todoValue && todoValue.length !== 0 && !this.state.errorMsg) {
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

  validateInput = value => {
    this.setState({ errorMsg: '' });
    const re = /^[a-zA-Z0-9-=/!/?@]{2,10}$/;
    if (!re.test(String(value))) {
      this.setState({ errorMsg: TEXT_ERR_MSG.textErrMain });
    }
    if (value.length === 0) {
      this.setState({ errorMsg: TEXT_ERR_MSG.textErrZero })
    }
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
        <br/>
        {errorMsg ? <span>{errorMsg}</span> : null}
        <br/>
      </div>
    )
  }
}

export default AddTodo;
