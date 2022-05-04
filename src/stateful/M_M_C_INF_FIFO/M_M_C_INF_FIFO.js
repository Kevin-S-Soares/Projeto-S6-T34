import GeneralMeasurements from "./GeneralMeasurements";
import WaitingOnQueue from "./WaitingOnQueue";
import ClientsOnSystem from "./ClientsOnSystem";

class M_M_C_INF_FIFO{
    constructor(chartUpdate, inputUpdate){
        this.chartUpdate = chartUpdate;
        this.inputUpdate = inputUpdate;
        this.name = "M/M/C/∞/FIFO";
        this.measures = [new ClientsOnSystem(), new WaitingOnQueue()];
        this.selectedMeasure = this.measures[0];
        this.generalMeasurement = new GeneralMeasurements();

        this.values = {
            arriveRate: 1,
            processRate: 2,
            channels: 2
        }

        this.getInputs = this.getInputs.bind(this);
        this.setMeasure = this.setMeasure.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    getName(){
        return this.name;
    }

    getValues(){
        return this.values;
    }

    getMeasures(){
        return this.measures;
    }

    getInputs(){
        return [
            {
                label: "Taxa de chegada:",
                value: this.values.arriveRate,
                event: this.setValue,
                index: "arriveRate"
            },
            {
                label: "Taxa de atendimento:",
                value: this.values.processRate,
                event: this.setValue,
                index: "processRate"
            },
            {
                label: "Número de postos de atendimento:",
                value: this.values.channels,
                event: this.setValue,
                integer: true,
                index: "channels"
            }
        ]
    }

    getInfo(){
        return {
            arriveType: 'Distribuição exponencial',
            processType: 'Distribuição exponencial',
            channels: this.values.channels,
            capacity: 'Infinito',
            discipline: 'First in first out'
        };
    }

    getChartVisualization(){
        return this.selectedMeasure.getChartOptions(this.values);
    }

    setMeasure(event){
        this.selectedMeasure = this.measures[event.target.value];
        this.chartUpdate(this.getChartVisualization());
    }

    setValue(event){
        let node = event.target;
        let input = node.getAttribute('index');
        this.values[input] = parseFloat(node.value);
        this.chartUpdate(this.getChartVisualization());
        this.inputUpdate(this.getInputs());
    }

    reload(){
        this.chartUpdate(this.getChartVisualization());
    }

    getGeneralMeasurementDescription(){
        return this.generalMeasurement.getResult(this.values);
    }
}

export default M_M_C_INF_FIFO;