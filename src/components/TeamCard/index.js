// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, imageUrl} = item
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list div2">
        <img src={imageUrl} className="logo1" alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
