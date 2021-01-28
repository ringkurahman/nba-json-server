import React, { Component } from 'react'
import axios from 'axios'

import { URL_EMAIL } from "../utils/path"



export default class Subscribe extends Component {
  state = {
    email: "",
    error: false,
    success: false,
    alreadyIn: false,
  }

  // Catch input event
  onChangeInput = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  // Clear message from screen
  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        error: false,
        success: false,
        alreadyIn: false,
      })
    }, 3000)
  }

  // Check email and Store data into json file
  saveSubscription = (email) => {
      axios.get(`${URL_EMAIL}?email=${email}`)
          .then((response) => {
      if (!response.data.length) {
        axios(URL_EMAIL, {
          method: 'post',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify({ email }),
        }).then((response) => {
          this.setState({
            email: "",
            success: true,
          })
          this.clearMessages()
        })
      } else {
        this.setState({
          email: "",
          alreadyIn: true,
        })
        this.clearMessages()
      }
    })
  }

  // Handle submit
  handleSubmit = (e) => {
    e.preventDefault()
    let email = this.state.email
    let regex = /^\S+@\S+\.\S+$/

    if (regex.test(email)) {
      this.saveSubscription(email)
    } else {
      this.setState({
        error: true,
      })
    }
    this.clearMessages()
  }

  render() {
    const state = this.state

    return (
      <div className="subcribe_panel">
        <h3>Subscribe to US</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={state.email}
              placeholder="youremail@gmail.com"
              onChange={this.onChangeInput}
            />

            <div className={state.error ? "error show" : "error"}>
              Check your email
            </div>
            <div className={state.success ? "success show" : "success"}>
              Thank you
            </div>
            <div className={state.alreadyIn ? "success show" : "success"}>
              You are already subscribed
            </div>
          </form>
        </div>
        <small>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam atque
          ducimus illum quos sapiente debitis nemo, architecto accusantium dicta
          cum.
        </small>
      </div>
    )
  }
}
