import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if(e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div className="todoForm" role="form">
      <Grid cols='7 9 9 10'>
        <input id='description' className="form-control"
          onChange={ props.changeDescription }
          onKeyUp={ keyHandler }
          value={ props.description } placeholder="Tarefa">
        </input>
      </Grid>
      <Grid cols='5 3 3 2'>
        <IconButton style='primary' icon='plus'
          onClick={ props.handleAdd } />
        <IconButton style='info' icon='search'
          onClick={ props.handleSearch } />
        <IconButton style='light' icon='eraser'
          onClick={ props.handleClear } />
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
