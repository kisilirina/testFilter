import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Card from '../Card/Card.jsx'

import { getUsersForSearchAC} from '../../redux/actionCreators/usersAC.js'

function CardsList() {
  const foundUsers = useSelector(state => state.foundUsers);
  const dispatch = useDispatch();
  const usersFromApi = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsersForSearchAC(usersFromApi));
  }, [])

  return (
    <div className="card-list">
      {
        foundUsers.length ?
          foundUsers.map(user => <Card key={user.cell} user={user} />)
          : <p>Здесь пока ничего нет...</p>
      }
    </div>
  )
}

export default CardsList;