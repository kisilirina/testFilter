import './Card.css';

function Card({user}) {
  return (
    <div className="card">
      <div className="user-image">
      <img alt="" src={user.picture.large}/>
      </div>
      <div className="user-info">
        <p>{Object.values(user.name).join(' ')}</p>
        <p>Возраст: {user.dob.age}</p>
        <p>Пол: {user.gender}</p>
        <p>Адрес: {user.location.country},{user.location.city}</p>
        <p>Дата регистрации: {new Date(user.registered.date).toLocaleString().slice(0,10)}</p>
      </div>
    </div>
  )
}

export default Card