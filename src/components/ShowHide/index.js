// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirstname = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastname = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              onClick={this.onClickFirstname}
              className="show-hide-button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              onClick={this.onClickLastname}
              className="show-hide-button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
