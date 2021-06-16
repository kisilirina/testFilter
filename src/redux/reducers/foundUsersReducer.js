import { FIND_USERS, GET_USERS_FOR_SEARCH } from "../types/usersTypes";

const foundUsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_FOR_SEARCH:
      return action.payload

    case FIND_USERS:
      const { inputSearch, genderSearch, ageSearch } = action.payload;
      let result = state;

      if (inputSearch.trim()) {
        result = result.filter(user => Object
          .values(user.name)
          .join(' ')
          .toLowerCase()
          .includes(inputSearch.toLowerCase()))

      }

      if ( genderSearch && genderSearch !== 'all') {
        result = result.filter(user => user.gender === genderSearch)
      }

      if (Object.keys(ageSearch).length) {
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
        result = Object.keys(ageSearch).reduce((acc, cur) => {
          const users = result.filter(user => user.dob.age >= mapOfAges[cur].from && user.dob.age < mapOfAges[cur].to);
          acc.push(...users);
          return acc;
        }, []);
      }
      return result
    
    default:
      return state
  }
}

export default foundUsersReducer