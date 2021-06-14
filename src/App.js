import CardsList from './components/CardsList/CardsList.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import SearchForm from "./components/SearchForm/SearchForm";
import { getUsersFromApi } from './redux/actionCreators/usersAC.js';

function App() {
  const usersFromApi = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!usersFromApi.length) dispatch(getUsersFromApi());
  }, [])

  return (
    <>
      <SearchForm />
      <CardsList />
    </>
  );
}

export default App;
