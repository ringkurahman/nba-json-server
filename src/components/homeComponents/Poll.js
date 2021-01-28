import React, { Component } from 'react'
import axios from 'axios'
import { URL_TEAMS } from "../../utils/path"


export default class Poll extends Component {
  state = {
    pollTeams: [],
  }

  // Fetch data from json server
  getPoll() {
    axios
      .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then((response) => {
        this.setState({
          pollTeams: response.data,
        })
      })
  }

  // Call the fetch data function
  componentDidMount() {
    this.getPoll()
  }

  // Add vote count
  addPoll(count, id) {
    axios(`${URL_TEAMS}/${id}`, {
      method: "patch",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ count: count + 1 }),
    }).then(() => {
      this.getPoll()
    })
  }

  // Create render function
  renderPoll() {
    const position = ["1ST", "2ND", "3RD"]
    return this.state.pollTeams.map((item, index) => (
      <div
        key={index}
        className="item"
        onClick={() => this.addPoll(item.count, item.id)}
      >
        <img src={`/images/teams/${item.logo}`} alt={item.team} />
        <h4>{position[index]}</h4>
        <div>{item.count} Votes</div>
      </div>
    ))
  }

  render() {
    return (
      <div className="home_poll">
        <h3>Who will be the next champion?</h3>
        <div className="poll_container">{this.renderPoll()}</div>
      </div>
    )
  }
}
