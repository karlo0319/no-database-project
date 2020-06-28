import React, { Component } from 'react';
// import axios from 'axios';

class SidesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidesArr: props.sidesArr
        }
    }

    // handleOnClick() 

    render() {
        const { sidesChoices, sidesOnClick } = this.props;
        const sidesOptionsArr = sidesChoices.map(foodchoice => {
            return (
                <div>
                        <div className="food-choices" key={foodchoice.id}>
                        <span onClick={() => sidesOnClick(foodchoice.id)}>{foodchoice.name}</span>

                        </div>
                </div>
            )
        })
        return (
            <div className="App">
                <section className="choices-title"> SIDES </section>
                <span> {sidesOptionsArr} </span>
            </div>
        )
    };
}


export default SidesComponent;