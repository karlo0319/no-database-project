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
      baseArr:[],
      entreeArr:[],
      sidesArr:[],
      baseChoiceArr:[],
      entreeChoiceArr:[],
      sidesChoiceArr:[],
      nameInput:"",
      customerObj: {}
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
    this.setState ({baseChoiceArr: newbaseChoiceArr})
  }

  entreeChoiceClick = (id) => {
    const newEntreeChoiceArr = this.state.entreeArr.filter(obj => {
      return obj.id === id
    })
    this.setState ({entreeChoiceArr: newEntreeChoiceArr})
  }

  sidesChoiceClick = (id) => {
    const newSidesChoiceArr = this.state.sidesArr.filter(obj => {
      return obj.id === id
    })
    this.setState ({sidesChoiceArr: newSidesChoiceArr})
  }

  handleInput = (e) => {
    this.setState ({
      nameInput: e.target.value
    })
  }

//   handleSubmit = () => {
//     this.setState({
//       customerObj: {
//         name: this.state.nameInput,
//         sideChoice: this.state.sidesChoiceArr,
//         entreeChoice: this.state.entreeChoiceArr,
//         baseChoice: this.state.baseChoiceArr
//       }, 
//       sidesChoiceArr: [],
//       entreeChoiceArr:[],
//       baseChoiceArr: []
//   })
// }

handleSubmit = (e) => {
  this.setState({
      sidesChoiceArr: [],
      entreeChoiceArr: [],
      baseChoiceArr: [],
      nameInput: e.target.value
    })
}


  render() { 
    // console.log(this.state.baseChoiceArr)
    const newBaseImage = this.state.baseChoiceArr.map(obj => {
      return obj.image
    })

    const newEntreeImage = this.state.entreeChoiceArr.map(obj => {
      return obj.image
    })

    const newSidesImage = this.state.sidesChoiceArr.map(obj => {
      return obj.image
    })

    return (
      <div className="App" >
        <Header />
        <div className="main-holder">
          <div className="left-side-box">
            <BaseComponent baseChoices={this.state.baseArr} baseOnClick={this.baseChoiceClick}/>
            <EntreeComponent entreeChoices={this.state.entreeArr} entreeOnClick={this.entreeChoiceClick}/>
            <SidesComponent sidesChoices={this.state.sidesArr} sidesOnClick={this.sidesChoiceClick}/>
            <input className="name-input" placeholder="Type Customer Name Here" value={this.state.nameInput} onChange={(e) => this.handleInput(e)}/>
            <button onClick={this.handleSubmit}> SUBMIT </button>
          </div>
          <div>
            <div className="right-side-box">
              <img className="base-circle" src={newBaseImage} alt=""/>
              <img className="sides-circle" src={newSidesImage} alt=""/>
              <img className="entree-circle" src={newEntreeImage} alt=""/>
              {/* <CustomerComponent customerObj={this.state.customerObj}/ > */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
