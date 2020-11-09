import { types } from '../../actions/types'
// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload
    default:
      return state
  }
}