const INITIAL_STATE = {
  description: '',
  list: [],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SERACHED':
      return { ...state, list: action.payload.data }
    case 'TODO_ADDED':
      return { ...state, description: '' }
    case 'TODO_REMOVED':
      return { ...state, description: '' }
    default:
      return state
  }
}
