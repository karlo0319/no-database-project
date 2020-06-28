import React, { Component } from 'react';
// import axios from 'axios';

class EntreeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BaseArr: []
        }
    }

    // handleOnClick() 

        render() {
            const { entreeChoices } = this.props;
            const entreeOptionsArr = entreeChoices.map(foodchoice => {
                return (
                    <div>
                        {foodchoice.id > 3 && foodchoice.id <= 6 ?
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
                    <section className="choices-title"> ENTREE </section>
                 <span> {entreeOptionsArr} </span>
                </div>
            )
        };
    }


    export default EntreeComponent;