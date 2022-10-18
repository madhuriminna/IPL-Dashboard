// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = item
  const class11 = matchStatus === 'Won'
  return (
    <li className="lists">
      <img src={competingTeamLogo} className="class1" alt={competingTeam} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      {class11 ? (
        <p className="active">{matchStatus}</p>
      ) : (
        <p className="inactive">{matchStatus}</p>
      )}
    </li>
  )
}
export default MatchCard
