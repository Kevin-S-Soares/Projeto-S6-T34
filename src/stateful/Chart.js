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

        this.options = getOptions(props);
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
      this.options = getOptions(state);
      this.chart.setOption(this.options);
    }

    initChart(){
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(this.options);
    }
}
function getOptions(state){
  return {
    tooltip: {},
    xAxis: {
      data: ['Número médio', 'Tempo médio']
    },
    yAxis: {},
    legend: {},
    series: [
      {
        name: 'Sistema',
        type: 'bar',
        data: [state.ns, state.ts],
      },
      {
        name: 'Fila',
        type: 'bar',
        barWidth: 20,
        stack: 'Sistema',
        data: [state.nf, state.tf]
      },
      {
        name: 'Atendimento',
        type: 'bar',
        barWidth: 20,
        stack: 'Sistema',
        data: [state.na, state.ta]
      }
    ]
  };
}
export default Chart;