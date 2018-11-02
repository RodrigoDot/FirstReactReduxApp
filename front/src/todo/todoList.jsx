import React from 'react'

import { connect } from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import If from '../helpers/if'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(task => (
      <tr key={ task._id }>
        <td className={ task.done ? 'markedAsDone table-body-description' : 'table-body-description' }>{ task.description }</td>
        <td className='table-body-actions'>
          <If test={!task.done}>
            <IconButton style='success' icon='check'
            onClick={ () => props.handleDone(task) } />
          </If>
          <If test={task.done}>
            <IconButton style='warning' icon='undo'
            onClick={ () => props.handleUndone(task) } />
          </If>
          <If test={task.done}>
            <IconButton style='danger' icon='trash'
              onClick={ () => props.handleRemove(task) } />
          </If>
        </td>
      </tr>
    ))
  }

  return (
    <Grid cols='12 12 12'>
      <hr />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='table-header-desciption'>Descrição</th>
            <th className='table-header-actions'>Ações</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </table>
    </Grid>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)
