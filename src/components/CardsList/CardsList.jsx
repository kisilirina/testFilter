import { useSelector } from 'react-redux'
import Card from '../Card/Card.jsx'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { getUsersFromApi } from '../../redux/actionCreators/usersAC.js'

function CardsList() {

  const users = useSelector(state => state.users)

  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) dispatch(getUsersFromApi());
  }, [])
 


  return (
    <div className="card-list">
    {
      users.length ?
        users.map(user => <Card key={user.cell} user={user} />)
        : <p>Здесь пока ничего нет...</p>
    }
    </div>
  )
}

export default CardsList;