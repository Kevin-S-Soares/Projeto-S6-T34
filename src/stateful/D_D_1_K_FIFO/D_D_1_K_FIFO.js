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
            processRate: 2,
            capacity: 1
        }

        this.getInputs = this.getInputs.bind(this);
        this.setMeasure = this.setMeasure.bind(this);
        this.setArriveRate = this.setArriveRate.bind(this);
        this.setProcessRate = this.setProcessRate.bind(this);
        this.setCapacity = this.setCapacity.bind(this);
        this.update = this.update.bind(this);
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
                integer: true,
                index: "arriveRate"
            },
            {
                label: "Taxa de atendimento:",
                value: this.values.processRate,
                event: this.setProcessRate,
                integer: true,
                index: "processRate"
            },
            {
                label: "Capacidade física do sistema:",
                value: this.values.capacity,
                event: this.setCapacity,
                integer: true,
                index: "capacity"
            }
        ];
    }

    getInfo(){
        return {
            arriveType: 'Determinístico',
            processType: 'Determinístico',
            channels: '1',
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

    setCapacity(event){
        let newValue = this.parseInput(event);
        this.values.capacity = newValue;
        this.update();
    }

    parseInput(event){
        let node = event.target;
        let value = parseInt(node.value);
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
        return [];
    }
}

export default D_D_1_K_FIFO;