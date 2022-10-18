// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {details: [], img: '', list: {}, isLoad: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const imgUrl = data.team_banner_url
    const matchDetails = data.latest_match_details
    console.log(matchDetails)
    const updatedDetails = {
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      date: matchDetails.date,
      firstInnings: matchDetails.first_innings,
      id: matchDetails.id,
      manOfTheMatch: matchDetails.man_of_the_match,
      matchStatus: matchDetails.match_status,
      result: matchDetails.result,
      secondInnings: matchDetails.second_innings,
      umpires: matchDetails.umpires,
      venue: matchDetails.venue,
    }
    const matchList = data.recent_matches
    console.log(matchList)
    const updatedList = matchList.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))
    this.setState({
      details: updatedDetails,
      isLoad: false,
      img: imgUrl,
      list: updatedList,
    })
  }

  getBody1 = () => {
    const {details, isLoad, img, list} = this.state
    return (
      <div className="divs">
        <img src={img} className="imgLogos" alt="team banner" />
        <h1>Latest Matches</h1>
        <div className="latest_match">
          <LatestMatch details={details} key={details.id} />
        </div>
        <ul className="types">
          {list.map(each => (
            <MatchCard item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoad} = this.state
    return (
      <div className="container11">
        {isLoad ? (
          <div className="load" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getBody1()
        )}
      </div>
    )
  }
}

export default TeamMatches
