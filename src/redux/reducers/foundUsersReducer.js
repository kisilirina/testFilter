import { FIND_USERS_BY_AGE, FIND_USERS_BY_GENDER, FIND_USERS_BY_NAME, GET_USERS_FOR_SEARCH } from "../types/usersTypes";

const foundUsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_FOR_SEARCH:
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
      const mapOfAges = {
        '0-18': {
          from: 0,
          to: 18,
        },
        '18-35': {
          from: 18,
          to: 35,
        },
        '35-65': {
          from: 35,
          to: 65,
        },
        '65+': {
          from: 65,
          to: 150,
        }
      }
      ////////////////
      const resultOfSearch = Object.keys(action.payload).reduce((acc, cur) => {
        const users = state.filter(user => user.dob.age >= mapOfAges[cur].from && user.dob.age < mapOfAges[cur].to);
        acc.push(...users);
        return acc;
      }, []);
      console.log(resultOfSearch, 'resultOfSearch');
      return resultOfSearch;
    /////////////////
    // switch (action.payload) {
    //   case '0-18':
    //     return state.filter(user => user.dob.age <= 18)

    //   case '18-35':
    //     return state.filter(user => user.dob.age >= 18 && user.dob.age <= 35)

    //   case '35-36':
    //     return state.filter(user => user.dob.age >= 35 && user.dob.age <= 65)

    //   case '65+':
    //     return state.filter(user => user.dob.age >= 65)

    //   default:
    //     return state
    // }

    default:
      return state
  }
}

export default foundUsersReducer