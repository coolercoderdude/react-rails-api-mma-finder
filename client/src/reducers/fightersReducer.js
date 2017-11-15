export default function fightersReducer(state = {loading: false, fighters: []}, action) {
  switch (action.type) {
    case 'FETCH_FIGHTERS':
      return { loading: false, fighters: action.payload.fighters }
    case 'LOADING_FIGHTERS':
      return Object.assign({}, state, {loading: true})
    case 'ADD_FIGHTER':
      return { fighters: state.fighters.concat(action.payload.fighter) };
    default:
      return state
  }
};
