import React from 'react';
import DataQueue from './input data/DataQueue';
import DataSystem from './input data/DataSystem';
import DataArrive from './input data/DataArrive';
import DataService from './input data/DataService'


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ts: 1,
            ns: 1,
            lambda : 2
        }

        this.setTS = this.setTS.bind(this);
        this.setNS = this.setNS.bind(this);
        this.setLambda = this.setLambda.bind(this);

        
        this.conversion = {
            ts : this.setTS,
            ns: this.setNS,
            lambda: this.setLambda,
        }
    }

    render() {
        return (
            <div>
                <DataSystem
                event={this.conversion}
                value={this.state}
                />
                <DataArrive 
                event={this.conversion}
                value={this.state}                
                />
            </div>
        );
    }
    /*
    <DataArrive />
    <DataQueue />
    <DataService />
    */

    setTS(event) {
        let ts = parseInt(event.target.value);
        let ns = this.state.lambda * ts;
        this.setState({
            ts: ts,
            ns: ns
        });
    }
    setNS(event){
        let ns = parseInt(event.target.value);
        let ts = ns / this.state.lambda;
        this.setState({
            ts: ts,
            ns: ns
        });
    }
    setLambda(event){
        let lambda = parseInt(event.target.value);
        let ts = this.state.ns / lambda;
        this.setState({
            ts: ts,
            lambda: lambda
        });
    }
}



export default Container