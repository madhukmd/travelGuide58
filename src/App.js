import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelCard from './components/TravelCard'
import './App.css'

// Replace your code here

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    travelList: [],
  }

  componentDidMount() {
    this.getTravel()
  }

  getBackData = each => {
    const up = {
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }
    return up
  }

  getTravel = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'https://apis.ccbp.in/tg/packages'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const travel = data.packages
      const updatedData = travel.map(each => this.getBackData(each))
      this.setState({
        travelList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {travelList} = this.state
    return (
      <ul className="listContainer">
        {travelList.map(each => (
          <TravelCard key={each.id} travelDetails={each} />
        ))}
      </ul>
    )
  }

  Retry = () => {
    this.getTravel()
  }

  failureView = () => (
    <div className="failure">
      <p className="text">
        Something went wrong <br /> Retry
      </p>
      <button type="button" className="button" onClick={this.Retry}>
        Retry
      </button>
    </div>
  )

  renderAll = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bgContainer">
        <h1 className="heading">Travel Guide</h1>
        <div className="content">{this.renderAll()}</div>
      </div>
    )
  }
}

export default App
