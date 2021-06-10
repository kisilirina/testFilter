import { useDispatch } from "react-redux"
import './App.css';
import CardsList from './components/CardsList/CardsList.jsx';
import { useEffect } from 'react'
import { getUsersFromApi } from './redux/actionCreators/usersAC';
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFromApi())
  }, [])

  return (
    <>
      <SearchForm />
      <CardsList />
    </>
  );
}

export default App;
