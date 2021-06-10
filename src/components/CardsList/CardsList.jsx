import { useSelector } from 'react-redux'
import Card from '../Card/Card.jsx'

function CardsList() {

  const users = useSelector(state => state.users)

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