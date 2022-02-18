import React from "react";
import * as echarts from 'echarts';
import './Chart.css';

class Chart extends React.Component{
    constructor(props){
        super(props);

        this.chart = null;
        this.changeVisualization = this.changeVisualization.bind(this);

        this.barChart = null;
        this.pieChart = null;

        this.options = getOptions(4);
        this.update = this.update.bind(this);
    }
    componentDidMount(){
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(this.options);
    }
    render(){
        return(
          <div>
            <div className='chart' id='chart'>
            </div>
            <button index='pie' onClick={this.changeVisualization}>Gráfico de setores</button>
            <button index='bar' onClick={this.changeVisualization}>Gráfico de barras</button>
          </div>

        );
    }

    changeVisualization(event){
    }

    update(state){
      this.options = getOptions(state.ns);
      this.chart.setOption(this.options);
    }

    initChart(){
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(this.options);
    }
}
function getOptions(value){
  return {
    title: {
      text: 'Teoria das filas'
    },
    tooltip: {},
    xAxis: {
      data: ['Número médio', 'Tempo médio']
    },
    yAxis: {},
    series: [
      {
        name: 'Número médio de clientes no sistema',
        type: 'bar',
        data: [value],
      },
      {
        name: 'Número médio de clientes na fila',
        type: 'bar',
        barWidth: 20,
        stack: 'Número médio de clientes no sistema',
        data: [2]
      },
      {
        name: 'Número médio de clientes no atendimento',
        type: 'bar',
        barWidth: 5,
        stack: 'Número médio de clientes no sistema',
        data: [2]
      },
    ]
  };
}
export default Chart;