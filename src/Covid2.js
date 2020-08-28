import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";

let apiUrl = "https://api.covidtracking.com/v1/us/current.json";

class Covid2 extends React.Component {
    constructor() {
        super();
        this.state = {
            'items': []
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch(apiUrl)
            .then(results => results.json())
            // .then(results => console.log(results));
            .then(results => this.setState({ 'items': results }));
    }
    render() {
        return (
            // null
            // <h1>TEST</h1>
            <ul>
                {this.state.items.map(function (item, index) {
                    return (
                        <div>
                            <p>{"Tested Positive: " + item.positive}</p>
                            <p>{"Total Tests: " + item.totalTestResults}</p>
                            <p>{"Recovered: " + item.recovered}</p>
                            <p>{"Daily Increase: " + item.positiveIncrease}</p>
                            <p>{"Total Deaths: " + item.death}</p>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

ReactDOM.render(
    <Covid2 />,
    document.getElementById('root')
);

export default Covid2;