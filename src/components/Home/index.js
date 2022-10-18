// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {list1: {}, isLoad: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const updated = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    console.log(updated)
    this.setState({
      list1: updated,
      isLoad: false,
    })
  }

  getBody = () => {
    const {list1} = this.state

    return (
      <>
        <div className="div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <div>
          <ul className="div1">
            {list1.map(each => (
              <TeamCard item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isLoad} = this.state
    return (
      <div className="container">
        {isLoad ? (
          <div className="load" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getBody()
        )}
      </div>
    )
  }
}
export default Home
