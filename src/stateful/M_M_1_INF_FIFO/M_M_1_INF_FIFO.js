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
        this.setArriveRate = this.setArriveRate.bind(this);
        this.setProcessRate = this.setProcessRate.bind(this);
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
                event: this.setArriveRate,
                index: "arriveRate"
            },
            {
                label: "Taxa de atendimento:",
                min: "1",
                value: this.values.processRate,
                event: this.setProcessRate,
                index: "processRate"
            }
        ]
    }

    getInfo(){
        return {
            arriveType: 'Distribuição exponencial',
            processType: 'Distribuição exponencial',
            channels: '1',
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

    setArriveRate(event){
        let newValue = this.parseInput(event);
        if(newValue >= this.values.processRate){
            alert("Taxa de chegada precisa ser menor do que a taxa de atendimento!");
        }
        else{
            this.values.arriveRate = newValue;
        }
        this.update();
    }

    setProcessRate(event){
        let newValue = this.parseInput(event);
        if(newValue <= this.values.arriveRate){
            alert("Taxa de atendimento precisa ser maior do que a taxa de chegada!")
        }
        else{
            this.values.processRate = newValue;
        }
        this.update();
    }

    parseInput(event){
        let node = event.target;
        let value = parseFloat(node.value);
        return value;
    }

    update(){
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