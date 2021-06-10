import React from 'react'
import { useDispatch } from 'react-redux';
import { searchUsersAC } from '../../redux/actionCreators/usersAC';

function SearchForm() {

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    const { name, value } = e.target;
    if (value.trim()) dispatch(searchUsersAC({ [name]: value }));
  }

  return (
    <form>
      <div>
        <input
          onChange={searchHandler}
          placeholder="Начните вводить..."
          type="search"
          name="inputSearch"
        />

      </div>

      <div>
        <div>
          <p>Фильтр по полу</p>
          <div>
            <input
              type="radio"
              id="genderChoice1"
              name="genderSearch"
              value="all"
              onChange={searchHandler}
            />
            <label for="genderChoice1">Все</label>

            <input
              type="radio"
              id="genderChoice2"
              name="genderSearch"
              value="female"
              onChange={searchHandler}
            />
            <label for="genderChoice2">Только женщины</label>

            <input
              type="radio"
              id="genderChoice3"
              name="genderSearch"
              value="male"
              onChange={searchHandler}
            />
            <label for="genderChoice3">Только мужчины</label>
          </div>
          <div>
          </div>
        </div>
        <p>Фильтр по возрастным группам</p>

        <div>
          <input
            type="checkbox"
            id="agesChoice1"
            name="ageSearch"
            value="0-18"
            onChange={searchHandler}
          />
          <label for="agesChoice1">0-18</label>
          <input
            type="checkbox"
            id="agesChoice2"
            name="ageSearch"
            value="18-35"
            onChange={searchHandler}
          />
          <label for="agesChoice2">18-35</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="agesChoice3"
            name="ageSearch"
            value="35-65"
            onChange={searchHandler}
          />
          <label for="agesChoice3">35-65</label>
          <input
            type="checkbox"
            id="agesChoice4"
            name="ageSearch"
            value="65+"
            onChange={searchHandler}
          />
          <label for="agesChoice4">65+</label>
        </div>

      </div>

    </form>
  )
}


export default SearchForm;
