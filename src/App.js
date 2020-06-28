import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BaseComponent from './Components/BaseComponent';
import EntreeComponent from './Components/EntreeComponent';
import SidesComponent from './Components/SidesComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodChoices: []
    }
  }


  componentDidMount = () => {
    axios.get('/api/foodchoices').then(res => {
      this.setState({
        foodChoices: res.data
      })
    })
  }

  render() {

    return (
      <div className="App" >
        <Header />
        <div className="main-holder">
          <div className="left-side-box">
            <BaseComponent baseChoices={this.state.foodChoices} />
            <EntreeComponent entreeChoices={this.state.foodChoices} />
            <SidesComponent sidesChoices={this.state.foodChoices} />
            <button> SUBMIT </button>
          </div>
          <div>
            <div className="right-side-box">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
