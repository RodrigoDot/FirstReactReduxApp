import React, {
  Component
} from 'react'

import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      list: []
    }

    // From Form
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    // From List
    this.handleDone = this.handleDone.bind(this)
    this.handleUndone = this.handleUndone.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleList()
  }

  handleList(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(response => {
        this.setState({
          ...this.state,
          description,
          list: response.data
        })
      })
  }

  handleSearch() {
    this.handleList(this.state.description)
  }

  handleClear() {
    this.handleList()
  }

  handleAdd() {
    const description = this.state.description

    axios.post(URL, {
      description
    })
      .then(response => {
        this.handleList()
      })
  }

  handleRemove(task) {
    axios.delete(`${URL}/${task._id}`)
      .then(response => {
        this.handleList(this.state.description)
      })
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }

  handleDone(task) {
    axios.put(`${URL}/${task._id}`, {
      ...task,
      done: true
    })
      .then(response => {
        this.handleList(this.state.description)
      })
  }

  handleUndone(task) {
    axios.put(`${URL}/${task._id}`, {
      ...task,
      done: false
    })
      .then(response => {
        this.handleList(this.state.description)
      })
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' pageDescription='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleAdd={ this.handleAdd }
          handleChange={ this.handleChange }
          handleSearch={ this.handleSearch }
          handleClear={ this.handleClear }
        />
        <TodoList
          list={ this.state.list }
          handleRemove={ this.handleRemove }
          handleUndone={ this.handleUndone }
          handleDone={ this.handleDone }
        />
      </div>
    )
  }
}
