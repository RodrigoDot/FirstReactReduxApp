import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SERACHED',
    payload: request
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(URL, {
      description
    })
    .then(resp => dispatch({
      type: 'TODO_ADDED',
      payload: resp.data
    }))
    .then(resp => dispatch(search()))
  }
}

export const markAsDone = (task) => {
  return dispatch => {
    axios.put(`${URL}/${task._id}`, { ...task, done: true })
    .then(resp => dispatch({
      type: 'MARKED_AS_DONE',
      payload: resp.data
    }))
    .then(resp => dispatch(search()))
  }
}

export const markAsUndone = (task) => {
  return dispatch => {
    axios.put(`${URL}/${task._id}`, { ...task, done: false})
    .then(resp => dispatch({
      type: 'MARKED_AS_UNDONE',
      payload: resp.data
    }))
    .then(resp => dispatch(search()))
  }
}

export const taskRemove = (task) => {
  return dispatch=> {
    axios.delete(`${URL}/${task._id}`)
    .then(resp => dispatch({
      type: 'TODO_REMOVED',
      payload: resp.data
    }))
    .then(resp => dispatch(search()))
  }
}
