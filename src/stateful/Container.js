import React from 'react';
import DataQueue from './input data/DataQueue';
import DataSystem from './input data/DataSystem';
import DataArrive from './input data/DataArrive';
import DataService from './input data/DataService'

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            ns: 4.0,
            ts: 2.0, 
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
                ts: () => this.state.ns / this.state.lambda, 
                nf: () => this.state.ns - this.state.na
            },
            ts: {
                ns: () => this.state.lambda * this.state.ts,
                tf: () => this.state.ts - this.state.ta
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
                tf: () => this.state.nf / this.state.lambda,
                ns: () => this.state.nf + this.state.na
            },
            tf: {
                nf: () => this.state.tf * this.state.lambda,
                ts: () => this.state.tf + this.state.ta
            },
            na: {
                ns: () => this.state.na + this.state.nf
            },
            ta: {
                mu: () => 1 / this.state.ta,
                ts: () => this.state.ta + this.state.tf
            },
            m: {
            },
            mu: {
                ta: () => 1 / this.state.mu
            },
        };

        this.updated = new Set();
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
        this.setValue(input, value);
        this.updated.clear();
    }

    async setValue(input, value){
        await this.setState({ 
            [input] : value
        });

        this.updated.add(input);
        
        for(const key in this.toUpdate[input]){
            if(!this.updated.has(key)){
                this.setValue(
                    key,
                    this.toUpdate[input][key](),
                    input,
                    );
            }
        }
    }
}

export default Container;