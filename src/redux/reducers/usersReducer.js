import { FIND_USERS_BY_AGE, FIND_USERS_BY_GENDER, FIND_USERS_BY_NAME, GET_USERS } from "../types/usersTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload

    case FIND_USERS_BY_NAME:
      return state.filter(user => Object
                                    .values(user.name)
                                    .join(' ')
                                    .toLowerCase()
                                    .includes(action.payload.toLowerCase()))

    case FIND_USERS_BY_GENDER:
      if (action.payload !== 'all') {
        return state.filter(user => user.gender === action.payload)
      }
      return state;

    case FIND_USERS_BY_AGE:
      switch (action.payload) {
        case '0-18':
          return state.filter(user => user.dob.age <= 18)

        case '18-35':
          return state.filter(user => user.dob.age >= 18 && user.dob.age <= 35)

        case '35-36':
          return state.filter(user => user.dob.age >= 35 && user.dob.age <= 65)

        case '65+':
          return state.filter(user => user.dob.age >= 65)

        default:
          return state
      }

    default:
      return state
  }
}

export default usersReducer