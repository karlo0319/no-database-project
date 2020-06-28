import React, { Component } from 'react';
// import axios from 'axios';

class EntreeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entreeArr: props.entreeArr
        }
    }

    // handleOnClick() 

        render() {
            const { entreeChoices, entreeOnClick } = this.props;
            const entreeOptionsArr = entreeChoices.map(foodchoice => {
                return (
                    <div>
                            <div className="food-choices" key={foodchoice.id}>
                            <span onClick={() => entreeOnClick(foodchoice.id)}>{foodchoice.name}</span>
                            </div>
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