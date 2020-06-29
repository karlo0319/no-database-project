import React, { Component } from 'react';

class CustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerArr: []
        };
    }

    render() {
        const { submitCustomer, customerOrder } = this.props
        let newCustomer = customerOrder.map(obj => {
            return (
                <div>
                    <div key={obj.customerName} className="customer-output"/>
                    <p className="customer-name"> {`${obj.customerName}:`}</p>
                    <p className="customer-item" onClick={() => submitCustomer(obj.id)}> {obj.name} </p>
                    <div>
                        <span> EDIT </span>
                        <span> DELETE </span>
                    </div>
                </div>

            )
        })
        return (
            <div>
                <span className="customer-info"> {newCustomer} </span>
            </div>
        );
    }
}

export default CustomerComponent;