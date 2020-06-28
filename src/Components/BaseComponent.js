import React, { Component } from 'react';


// import axios from 'axios';

class BaseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseArr: props.baseChoices
        }
    }


    render() {
        const { baseChoices, baseOnClick } = this.props;
        const baseOptionsArr = baseChoices.map(foodchoice => {
            return (
                <div className="food-choices" key={foodchoice.id}>
                    <span onClick={() => baseOnClick(foodchoice.id)}>{foodchoice.name}</span>
                </div>
            )
        })
        return (
            <div className="App">
                <section className="choices-title"> BASE </section>
                <span> {baseOptionsArr} </span>
            </div>
        )
    };
}


export default BaseComponent;