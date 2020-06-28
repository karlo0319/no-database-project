import React, { Component } from 'react';


// import axios from 'axios';

class BaseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BaseArr: []
        }
    }

    // handleOnClick() 

        render() {
            const { baseChoices } = this.props;
            const baseOptionsArr = baseChoices.map(foodchoice => {
                return (
                    <div>
                        {foodchoice.id <= 3 ?
                            <div className="food-choices" key={foodchoice.id}>
                                <span onClick={this.handleOnClick}>{foodchoice.name}</span>
                                {/* <button onClick={this.handleOnClick}><img src={foodchoice.image} alt={foodchoice.name}/></button> */}
                            </div>
                            : null}
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