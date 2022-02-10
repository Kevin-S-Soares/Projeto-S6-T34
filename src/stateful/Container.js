import React from 'react';
import DataQueue from './input data/DataQueue';
import DataSystem from './input data/DataSystem';
import DataArrive from './input data/DataArrive';
import DataService from './input data/DataService'


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ns: () => 2,
            ts: () => 1, 
            lambda : () => 2,
            ic : () => 0.5,
            nf: () => 2,
            tf: () => 1,
        }

        this.parseTS = this.parseTS.bind(this);
        this.parseNS = this.parseNS.bind(this);
        this.parseLambda = this.parseLambda.bind(this);
        this.parseIC = this.parseIC.bind(this);
        this.parseNF = this.parseNF.bind(this);
        this.parseTF = this.parseTF.bind(this);

        this.setTS = this.setTS.bind(this);
        this.setNS = this.setNS.bind(this);
        this.setLambda = this.setLambda.bind(this);
        this.setIC = this.setIC.bind(this);
        this.setNF = this.setNF.bind(this);
        this.setTF = this.setTF.bind(this);

        
        this.conversion = {
            ts : this.parseTS,
            ns: this.parseNS,
            lambda: this.parseLambda,
            ic: this.parseIC,
            nf: this.parseNF,
            tf: this.parseTF,
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
                <DataQueue
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

    parseNS(event){
        let ns = parseFloat(event.target.value);
        this.setNS(ns, null);
    }

    parseTS(event) {
        let ts = parseFloat(event.target.value);
        this.setTS(ts, null);
    }

    parseLambda(event){
        let lambda = parseFloat(event.target.value);
        this.setLambda(lambda, null)
    }

    parseIC(event){
        let ic = parseFloat(event.target.value);
        this.setIC(ic, null);
    }

    parseNF(event){
        let nf = parseFloat(event.target.value);
        this.setNF(nf);
    }

    parseTF(event){
        let tf = parseFloat(event.target.value);
        this.setTF(tf);
    }

    async setNS(value, removeUpdate){
        await this.setState({
            ns: () => value
        });
        let toUpdate = new Map([ 
            [ this.setTS, value / this.state.lambda() ] 
        ]);

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setNS);
        });
    }

    async setTS(value, removeUpdate){
        await this.setState({
            ts: () => value
        });

        let toUpdate = new Map([ 
            [ this.setNS, this.state.lambda() * value ] 
        ]);

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setTS);
        });
    }

    async setLambda(value, removeUpdate){
        await this.setState({
            lambda: () => value
        });
        console.log(this.state.ts())
        let toUpdate = new Map([ 
            [ this.setNS, value * this.state.ts() ], 
            [ this.setIC, 1 / value ],
            [ this.setNF, value * this.state.tf() ]
        ]);

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setLambda);
        });
    }

    async setIC(value, removeUpdate){
        await this.setState({
            ic: () => value
        });

        let toUpdate = new Map([ 
            [ this.setLambda, 1 / this.state.lambda() ]
        ]);

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setIC);
        });
    }

    async setNF(value, removeUpdate){
        await this.setState({
            nf: () => value
        });

        
        let toUpdate = new Map([ 
            [ this.setTF, value / this.state.lambda() ]
        ]);
        

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setNF);
        });

        
    }
    async setTF(value, removeUpdate){
        await this.setState({
            tf: () => value
        });

        
        let toUpdate = new Map([ 
            [ this.setNF, value * this.state.lambda() ]
        ]);
        

        if(removeUpdate != null){
            toUpdate.delete(removeUpdate)
        }
        toUpdate.forEach((value, key) => {
            key(value, this.setTF);
        });

        
    }
}



export default Container