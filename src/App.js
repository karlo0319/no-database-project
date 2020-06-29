import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BaseComponent from './Components/BaseComponent';
import EntreeComponent from './Components/EntreeComponent';
import SidesComponent from './Components/SidesComponent';
import CustomerComponent from './Components/CustomerComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseArr: [],
      entreeArr: [],
      sidesArr: [],
      baseChoiceArr: [],
      entreeChoiceArr: [],
      sidesChoiceArr: [],
      nameInput: "",
      customerArr: []
    }
  }


  componentDidMount = () => {
    axios.get('/api/foodchoices').then(res => {
      const baseArr = res.data.filter(element => element.category === "base")
      const entreeArr = res.data.filter(element => element.category === "entree")
      const sidesArr = res.data.filter(element => element.category === "sides")
      this.setState({ baseArr, entreeArr, sidesArr })
    })
  }

  baseChoiceClick = (id) => {
    const newbaseChoiceArr = this.state.baseArr.filter(obj => {
      return obj.id === id
    })
    this.setState({ baseChoiceArr: newbaseChoiceArr })
  }

  entreeChoiceClick = (id) => {
    const newEntreeChoiceArr = this.state.entreeArr.filter(obj => {
      return obj.id === id
    })
    this.setState({ entreeChoiceArr: newEntreeChoiceArr })
  }

  sidesChoiceClick = (id) => {
    const newSidesChoiceArr = this.state.sidesArr.filter(obj => {
      return obj.id === id
    })
    this.setState({ sidesChoiceArr: newSidesChoiceArr })
  }

  handleInput = (e) => {
    this.setState({
      nameInput: e.target.value
    })
  }

  handleNewCust = (e) => {
    let newCustomer = [...this.state.baseChoiceArr, ...this.state.entreeChoiceArr, ...this.state.sidesChoiceArr]
    newCustomer[0].customerName = this.state.nameInput
    newCustomer[1].customerName = this.state.nameInput
    newCustomer[2].customerName = this.state.nameInput
    axios.post('/api/foodchoices', newCustomer).then(res => this.setState({
      customerArr: res.data,
      nameInput: '',
      sidesChoiceArr: [],
      entreeChoiceArr: [],
      baseChoiceArr: [],
    }
    ))
  }


  render() {

    const newBaseImage = this.state.baseChoiceArr.map(obj => {
      return obj.image
    })

    const newEntreeImage = this.state.entreeChoiceArr.map(obj => {
      return obj.image
    })

    const newSidesImage = this.state.sidesChoiceArr.map(obj => {
      return obj.image
    })

    const { customerArr } = this.state
    console.log(customerArr)


    console.log(this.state.nameInput)
    return (
      <div className="App" >
        <Header />
        <div className="main-holder">
          <div className="left-side-box">
            <BaseComponent baseChoices={this.state.baseArr} baseOnClick={this.baseChoiceClick} />
            <EntreeComponent entreeChoices={this.state.entreeArr} entreeOnClick={this.entreeChoiceClick} />
            <SidesComponent sidesChoices={this.state.sidesArr} sidesOnClick={this.sidesChoiceClick} />
            <input className="name-input" placeholder="Type Customer Name Here" value={this.state.nameInput} onChange={(e) => this.handleInput(e)} />
            <button onClick={(e) => this.handleNewCust(e)}> SUBMIT </button>
          </div>
          <div className="right-side-box">
            <div>
              <img className="base-circle" src={newBaseImage} alt="" />
              <img className="sides-circle" src={newSidesImage} alt="" />
              <img className="entree-circle" src={newEntreeImage} alt="" />
            </div>
            <div>
              <CustomerComponent submitCustomer={this.handleNewCust} customerOrder={this.state.customerArr} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
