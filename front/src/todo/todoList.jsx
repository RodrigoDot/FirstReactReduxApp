import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import If from '../helpers/if'
import {
  markAsDone,
  markAsUndone,
  taskRemove
} from './todoActions'

const TodoList = props => {

  const renderRows = () => {
    const { markAsDone, markAsUndone, taskRemove } = props
    const list = props.list || []
    return list.map(task => (
      <tr key={ task._id }>
        <td className={ task.done ? 'markAsDone table-body-description' : 'table-body-description' }>{ task.description }</td>
        <td className='table-body-actions'>
          <If test={ !task.done }>
            <IconButton style='success' icon='check'
            onClick={ () => markAsDone(task) } />
          </If>
          <If test={ task.done }>
            <IconButton style='warning' icon='undo'
            onClick={ () => markAsUndone(task) } />
          </If>
          <If test={ task.done }>
            <IconButton style='danger' icon='trash'
              onClick={ () => taskRemove(task) } />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  markAsDone,
  markAsUndone,
  taskRemove
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
