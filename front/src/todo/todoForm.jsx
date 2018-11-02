import React, {
  Component
} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {
  changeDescription,
  search,
  add,
  clear
 } from './todoActions'

class TodoForm extends Component{
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props
    if(e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if(e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description, clear, changeDescription } = this.props
    return (
      <div className="todoForm" role="form">
        <Grid cols='7 9 9 10'>
          <input id='description' className="form-control"
            onChange={ changeDescription }
            onKeyUp={ this.keyHandler }
            value={ description } placeholder="Tarefa">
          </input>
        </Grid>
        <Grid cols='5 3 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={ () => add(description) } />
          <IconButton style='info' icon='search'
            onClick={ () => search(description) } />
          <IconButton style='light' icon='eraser'
            onClick={ () => clear() } />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeDescription,
  search,
  add,
  clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
