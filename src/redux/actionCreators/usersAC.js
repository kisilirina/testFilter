import { FIND_USERS, FIND_USERS_BY_AGE, FIND_USERS_BY_GENDER, FIND_USERS_BY_NAME, GET_USERS, GET_USERS_FOR_SEARCH } from "../types/usersTypes"


export const getUsersFromApi = () => async (dispatch) => {
  const response = await fetch('https://randomuser.me/api/?results=20')
  const usersFromApi = await response.json()
  dispatch(getUsersAC(usersFromApi.results))
}

export const getUsersAC = (users) => {
  return {
    type: GET_USERS,
    payload: users
  }
}

export const getUsersForSearchAC = (users) => {
  return {
    type: GET_USERS_FOR_SEARCH,
    payload: users
  }
}

export const searchUsersAC = ({ inputSearch, genderSearch, ...ageSearch }) =>  {

  return {
    type: FIND_USERS,
    payload: {
      inputSearch,
      genderSearch,
      ageSearch
    }
  }
  // if (inputSearch.trim()) {
  //   return {
  //     type: FIND_USERS_BY_NAME,
  //     payload: inputSearch
  //   }
  // }

  // if (genderSearch) {
  //   return {
  //     type: FIND_USERS_BY_GENDER,
  //     payload: genderSearch
  //   }
  // }

  // if (Object.keys(ageSearch).length) {
  //   return {
  //     type: FIND_USERS_BY_AGE,
  //     payload: ageSearch
  //   }
  // }
}