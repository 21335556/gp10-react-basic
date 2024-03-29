
function reducer(state = { count: 10 }, action) {
  console.log(action.type);
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export default reducer