import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from "react-transition-group"

import { URL_TEAMS } from '../utils/path'


export default class Teams extends Component {
  state = {
    teams: [],
    filtered: [],
    keyword: "",
  }

  // Fetch data from json server
  componentDidMount() {
    axios.get(URL_TEAMS).then((response) => {
      this.setState({
        teams: response.data,
        filtered: response.data,
      })
    })
  }

  // Render team
  renderList = (filtered) =>
    filtered.map((team, index) => (
      <CSSTransition key={index} timeout={1000} className="fade">
        <Link to={`/teams/${team.name}`} className="team_item">
          <img src={`/images/teams/${team.logo}`} alt={team.name} style={{height:'180px', marginTop:'60px'}} />
        </Link>
      </CSSTransition>
    ))

    // Search function
    searchTerm = (e) => {
        const keyword = e.target.value
        if (keyword !== '') {
            const list = this.state.teams.filter(item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            this.setState({
                filtered: list,
                keyword
            })
        } else {
            this.setState({
              filtered: this.state.teams,
              keyword
            })
        }
    }

  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            value={this.state.keyword}
            onChange={(e) => this.searchTerm(e)}
            placeholder="Search your team"
          />
        </div>
        <div className="teams_container">
          <TransitionGroup component="span">
            {this.renderList(this.state.filtered)}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}
