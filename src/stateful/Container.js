import React from 'react';
import DataQueue from './input data/DataQueue';
import DataSystem from './input data/DataSystem';
import DataArrive from './input data/DataArrive';
import DataService from './input data/DataService'


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            ns: 2.0,
            ts: 1.0, 
            lambda : 2.0,
            ic : 0.5,
            nf: 2.0,
            tf: 1.0,
            na: 2.0,
            ta: 1.0, 
            m: 1.0,
            mu: 1.0
        }

        this.parseInput = this.parseInput.bind(this);
        this.setValue = this.setValue.bind(this);

        this.toUpdate = {
            ns: {
                ts: () => this.state.ns / this.state.lambda
            },
            ts: {
                ns: () => this.state.lambda * this.state.ts
            },
            lambda: {
                ns: () => this.state.lambda * this.state.ts,
                ic: () => 1 / this.state.lambda,
                nf: () => this.state.lambda * this.state.tf
            },
            ic: {
                lambda: () => 1 / this.state.ic
            },
            nf: {
                tf: () => this.state.nf / this.state.lambda
            },
            tf: {
                nf: () => this.state.tf * this.state.lambda
            },
        };
    }

    render() {
        return (
            <div>
                <DataSystem
                event={this.parseInput}
                value={this.state}
                />
                <DataArrive 
                event={this.parseInput}
                value={this.state}
                />
                <DataQueue
                event={this.parseInput}
                value={this.state}
                />
                <DataService
                event={this.parseInput}
                value={this.state}
                />
            </div>
        );
    }

    parseInput(event){
        let node = event.target;
        let value = parseFloat(node.value);
        let input = node.getAttribute('index');
        this.setValue(input, value, input);
    }

    async setValue(input, value, removeUpdate){
        await this.setState({ 
            [input] : value
        });
        for(const key in this.toUpdate[input]){
            if(key !== removeUpdate){
                this.setValue(
                    key,
                    this.toUpdate[input][key](),
                    input,
                    );
            }
        }
    }
}



export default Container