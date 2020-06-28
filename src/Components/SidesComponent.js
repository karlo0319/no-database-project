import React, { Component } from 'react';
// import axios from 'axios';

class SidesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // handleOnClick() 

    render() {
        const { sidesChoices } = this.props;
        const sidesOptionsArr = sidesChoices.map(foodchoice => {
            return (
                <div>
                    {foodchoice.id > 6 && foodchoice.id <= 9 ?
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
                <section className="choices-title"> SIDES </section>
                <span> {sidesOptionsArr} </span>
            </div>
        )
    };
}


export default SidesComponent;