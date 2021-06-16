import { FIND_USERS, GET_USERS_FROM_API, GET_USERS_FOR_SEARCH } from "../types/usersTypes"


export const getUsersFromApi = () => async (dispatch) => {
  const response = await fetch('https://randomuser.me/api/?results=20')
  const usersFromApi = await response.json()
  dispatch(getUsersAC(usersFromApi.results))
}

export const getUsersAC = (users) => {
  return {
    type: GET_USERS_FROM_API,
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

}