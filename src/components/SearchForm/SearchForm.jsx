import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersForSearchAC, searchUsersAC } from '../../redux/actionCreators/usersAC';

function SearchForm() {

  const dispatch = useDispatch();
  const formRef = useRef(null);
  const usersFromApi = useSelector(state => state.users)
  const searchHandler = (e) => {

    dispatch(getUsersForSearchAC(usersFromApi));

    const valuesOfFields = Object.fromEntries(new FormData(formRef.current).entries());
    dispatch(searchUsersAC(valuesOfFields));
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}
      onChange={searchHandler}
    >
      <div>
        <input
          placeholder="Начните вводить..."
          type="search"
          name="inputSearch"
        />

      </div>

      <div>
        <div>
          <div>
            <p>Фильтр по полу</p>
            <input
              type="radio"
              id="genderChoice1"
              name="genderSearch"
              value="all"
            />
            <label for="genderChoice1">Все</label>

            <input
              type="radio"
              id="genderChoice2"
              name="genderSearch"
              value="female"
            />
            <label for="genderChoice2">Только женщины</label>

            <input
              type="radio"
              id="genderChoice3"
              name="genderSearch"
              value="male"
            />
            <label for="genderChoice3">Только мужчины</label>
          </div>
          <div>
          </div>
        </div>

        <div>
          <p>Фильтр по возрастным группам</p>
          <input
            type="checkbox"
            id="agesChoice1"
            name="0-18"
          />
          <label for="agesChoice1">0-18</label>
          <input
            type="checkbox"
            id="agesChoice2"
            name="18-35"
          />
          <label for="agesChoice2">18-35</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="agesChoice3"
            name="35-65"
          />
          <label for="agesChoice3">35-65</label>
          <input
            type="checkbox"
            id="agesChoice4"
            name="65+"
          />
          <label for="agesChoice4">65+</label>
        </div>

      </div>

    </form>
  )
}


export default SearchForm;

