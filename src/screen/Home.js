import React, { Component } from 'react'
import axios from 'axios'

import { URL_HOME } from "../utils/path"
import SliderWidget from '../utils/slider'
import Subscribe from '../utils/subscribe'
import Blocks from '../components/homeComponents/Blocks'
import Poll from '../components/homeComponents/Poll'


export default class Home extends Component {

    state = {
        home: '',
    }

    componentDidMount() {
        axios.get(URL_HOME)
            .then(res => {
                this.setState({ home: res.data })
            })
    }

    render() {
        
        return (
          <div>
            <SliderWidget slides={this.state.home.slider} />
                <Subscribe />
                <Blocks blocks={this.state.home.blocks} />
                <Poll />
          </div>
        )
    }
}

