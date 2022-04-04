class ClientsOnSystem{
    getName(){
        return "Probabilidade de haver pelo menos k elementos no sistema";
    }

    getChartOptions(values){
        return ({
            legend: {
                show: true,
                align: 'right',
                top: "2%"
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'value',
                name: 'Número de clientes no sistema',
                interval: 1,
                min: 0,
                max: 20,
                top: "2%",
            },
            yAxis: {
                type: 'value',
                name: 'Probabilidade',
                interval: 0.1, 
                min: 0,
                max: 1,
            },
            series: [{
                name: 'Número de clientes no sistema',
                color: 'blue',
                data: this.getData(values),
                type: 'line',
                smooth: true
            }]
        });
    }
    getData(values){
        const result = [];
        let occupationRate = values.arriveRate / values.processRate
        for(let i = 0; i <= 20; i++)
        {
            let aux = Math.pow(occupationRate, i)
            result.push([i, aux])
        }
        return result;
    }
}

export default ClientsOnSystem;