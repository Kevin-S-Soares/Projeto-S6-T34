import React from "react";
import QueueTypeSelection from "./QueueTypeSelection";
import D_D_1_K_FIFO from "../D_D_1_K_FIFO/D_D_1_K_FIFO";
import QueueDetails from "./QueueDetails";
import MeasureTypeSelection from "./MeasureTypeSelection";
import InputNumberFactory from "./InputNumberFactory";
import ChartVisualization from "./ChartVisualization";
import M_M_1_INF_FIFO from "../M_M_1_INF_FIFO/M_M_1_INF_FIFO";
import GeneralMeasurement from "./GeneralMeasurement";


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.setInput = this.setInput.bind(this);

        this.chartVisualization = new ChartVisualization('chart');
        this.queueOptions = [
            new D_D_1_K_FIFO(this.chartVisualization.update, this.setInput),
            new M_M_1_INF_FIFO(this.chartVisualization.update, this.setInput),
        ]
        
        this.state = {
            selected : this.queueOptions[0],
            inputs: this.queueOptions[0].getInputs()
        }

        this.setQueueType = this.setQueueType.bind(this);
        
    }

    render() {
        return (
            <div>
                <QueueTypeSelection
                    options={this.queueOptions}
                    queueTypeSelectionEvent={this.setQueueType}
                />
                <QueueDetails 
                    values={this.state.selected.getInfo()}
                />
                <MeasureTypeSelection 
                    measures={this.state.selected.getMeasures()}
                    measureSelectionEvent={this.state.selected.setMeasure}
                />
                <GeneralMeasurement
                    values={this.state.selected.getGeneralMeasurementDescription()}
                />
                <InputNumberFactory 
                    inputs={this.state.inputs}
                />
            </div>
        );
    }

    componentDidMount(){
        this.chartVisualization.initChart(this.state.selected.getChartVisualization());
    }

    setQueueType(event){
        this.queueOptions[event.target.value].reload();
        this.setState({selected: this.queueOptions[event.target.value]});    
        this.setState({inputs: this.queueOptions[event.target.value].getInputs()});

    }

    setInput(inputValues){
        this.setState({inputs: inputValues});
    }
}

export default Container;