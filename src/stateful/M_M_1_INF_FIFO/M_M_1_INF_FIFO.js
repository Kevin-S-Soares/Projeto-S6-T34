import WaitingOnQueue from "./WaitingOnQueue";
import ClientsOnSystem from "./ClientsOnSystem";
import GeneralMeasurements from "./GeneralMeasurements";

class M_M_1_INF_FIFO{
    constructor(chartUpdate, inputUpdate){
        this.chartUpdate = chartUpdate;
        this.inputUpdate = inputUpdate;
        this.name = "M/M/1/∞/FIFO";
        this.measures = [new WaitingOnQueue(), new ClientsOnSystem()];
        this.selectedMeasure = this.measures[0];
        this.generalMeasurement = new GeneralMeasurements();

        this.values = {
            arriveRate: 1,
            processRate: 2
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
                label: "Taxa de chegada (1 ÷ λ):",
                value: this.values.arriveRate,
                event: this.setValue,
                index: "arriveRate"
            },
            {
                label: "Taxa de atendimento (1 ÷ μ):",
                value: this.values.processRate,
                event: this.setValue,
                index: "processRate"
            }
        ]
    }

    getInfo(){
        return {
            arriveType: 'Distribuição exponencial',
            processType: 'Distribuição exponencial',
            number: '1',
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

export default M_M_1_INF_FIFO;