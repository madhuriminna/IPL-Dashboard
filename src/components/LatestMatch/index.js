import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = details
  return (
    <>
      <div className="div0">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{secondInnings}</p>
        <p>{venue}</p>
      </div>
      <img src={competingTeamLogo} className="imgmiddle" alt={competingTeam} />
      <div className="div0">
        <p>{firstInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{result}</p>
        <p>{umpires}</p>
      </div>
    </>
  )
}
export default LatestMatch
