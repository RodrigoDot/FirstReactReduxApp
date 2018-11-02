import React, {
  Component
} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {
  changeDescription,
  search
 } from './todoActions'

class TodoForm extends Component{
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
    // this.handleAdd = this.handleAdd.bind(this)
    // this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if(e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if(e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <div className="todoForm" role="form">
        <Grid cols='7 9 9 10'>
          <input id='description' className="form-control"
            onChange={ this.props.changeDescription }
            onKeyUp={ this.keyHandler }
            value={ this.props.description } placeholder="Tarefa">
          </input>
        </Grid>
        <Grid cols='5 3 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={ this.props.handleAdd } />
          <IconButton style='info' icon='search'
            onClick={ this.props.handleSearch } />
          <IconButton style='light' icon='eraser'
            onClick={ this.props.handleClear } />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
