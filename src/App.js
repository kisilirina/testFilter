import './App.css';
import CardsList from './components/CardsList/CardsList';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
   fetch('https://randomuser.me/api/?results=20')
   .then(result => result.json())
   .then(data => console.log(data));
  }, [])
  return (
    <CardsList />
  );
}

export default App;
