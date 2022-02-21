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

        this.value = {
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

        this.parseInputAndSetValue = this.parseInputAndSetValue.bind(this);
        this.setValue = this.setValue.bind(this);

        this.toUpdate = {
            ns: {
            },
            ts: {
            },
            lambda: {
                ic: () => 1 / this.value.lambda,
                nf: () => this.value.lambda * this.value.tf
            },
            ic: {
                lambda: () => 1 / this.value.ic
            },
            nf: {
                tf: () => this.value.nf / this.value.lambda,
                ns: () => this.value.nf + this.value.na
            },
            tf: {
                nf: () => this.value.tf * this.value.lambda,
                ts: () => this.value.tf + this.value.ta
            },
            na: {
                ta: () => this.value.na / this.value.lambda,
                ns: () => this.value.na + this.value.nf,
            },
            ta: {
                na: () => this.value.ta * this.value.lambda,
                ts: () => this.value.tf + this.value.ta,
                mu: () => 1 / this.value.ta,
            },
            m: {
            },
            mu: {
                ta: () => 1 / this.value.mu
            },
            rho: {
            },
            tfs: {
            }
        };

        this.updated = new Set();
        this.chart = new Chart(this.value)
    }

    render() {
        return (
            <div>
                {this.chart.render()}
                <SystemData
                event={this.parseInputAndSetValue}
                value={this.value}
                />
                <ArriveData 
                event={this.parseInputAndSetValue}
                value={this.value}
                />
                <QueueData
                event={this.parseInputAndSetValue}
                value={this.value}
                />
                <ServiceData
                event={this.parseInputAndSetValue}
                value={this.value}
                />
                <OtherData
                event={this.parseInputAndSetValue}
                value={this.value}
                />
            </div>
        );
    }

    componentDidMount(){
        this.chart.initChart();
    }

    parseInputAndSetValue(event){
        let node = event.target;
        let value = parseFloat(node.value);
        let input = node.getAttribute('index');

        this.setValue(input, value);
        this.setState(this.value);
        this.updated.clear();
        this.chart.update(this.value);
    }

    setValue(input, value){
        this.value[input] = value;

        this.updated.add(input);

        for(const key in this.toUpdate[input]){
            if(!this.updated.has(key)){
                this.setValue(
                    key,
                    this.toUpdate[input][key]()
                    );
            }
        }
    }
}

export default Container;