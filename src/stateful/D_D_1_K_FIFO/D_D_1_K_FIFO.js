import NumberOfUsersPerTime from "./NumberOfUsersPerTime";
import WaitingOnQueue from "./WaitingOnQueue";

class D_D_1_K_FIFO{

    constructor(chartUpdate, inputUpdate){
        this.chartUpdate = chartUpdate;
        this.inputUpdate = inputUpdate;
        this.name = "D/D/1/K/FIFO";
        this.measures = [new NumberOfUsersPerTime(), new WaitingOnQueue()];
        this.selectedMeasure = this.measures[0];

        this.values = {
            arriveRate: 1,
            processRate: 1,
            capacity: 1
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
                integer: true,
                index: "arriveRate"
            },
            {
                label: "Taxa de atendimento (1 ÷ μ):",
                value: this.values.processRate,
                event: this.setValue,
                integer: true,
                index: "processRate"
            },
            {
                label: "Capacidade física do sistema (K):",
                value: this.values.capacity,
                event: this.setValue,
                integer: true,
                index: "capacity"
            }
        ];
    }

    getInfo(){
        return {
            arriveType: 'Determinístico',
            processType: 'Determinístico',
            number: '1',
            capacity: this.values.capacity,
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
        this.values[input] = parseInt(node.value);
        this.chartUpdate(this.getChartVisualization());
        this.inputUpdate(this.getInputs());
    }
}

export default D_D_1_K_FIFO;