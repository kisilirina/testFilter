import { GET_USERS_FROM_API } from "../types/usersTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_FROM_API:
      return action.payload

    default:
      return state
  }
}

export default usersReducer