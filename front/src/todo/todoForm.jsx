import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
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
          onChange={ props.handleChange }
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
