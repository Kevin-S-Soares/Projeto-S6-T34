import React from 'react';
import QueueData from './input data/QueueData';
import SystemData from './input data/SystemData';
import ArriveData from './input data/ArriveData';
import ServiceData from './input data/ServiceData'
import OtherData from './input data/OtherData';
import Chart from './Chart';

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
            mu: 1.0, 
            rho: 2.0,
            tfs: 1.0
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
            rho: {
            },
            tfs: {
            }
        };

        this.updated = new Set();
        this.lock = 0;
        this.chart = new Chart()
    }

    render() {
        return (
            <div>
                {this.chart.render()}
                <SystemData
                event={this.parseInput}
                value={this.state}
                />
                <ArriveData 
                event={this.parseInput}
                value={this.state}
                />
                <QueueData
                event={this.parseInput}
                value={this.state}
                />
                <ServiceData
                event={this.parseInput}
                value={this.state}
                />
                <OtherData
                event={this.parseInput}
                value={this.state}
                />
            </div>
        );
    }

    componentDidMount(){
        this.chart.initChart();
    }

    async parseInput(event){
        let node = event.target;
        let value = parseFloat(node.value);
        let input = node.getAttribute('index');
        this.setValue(input, value);
        setTimeout(() => 0, 100);
        this.updated.clear();
        this.chart.update(this.state);
        console.log('chegou aqui');
    }

    async setValue(input, value){
        console.log('input being updated: ' + input + ' with value: ' + value)
        this.lock++;
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
        this.lock--;
    }
}

export default Container;