import React from "react";
import * as echarts from 'echarts';
import './Chart.css';
import getBarChartOptions from "./chart visualizations/BarChart";
import getPieChartOptions from "./chart visualizations/PieChart"

class Chart extends React.Component{
    constructor(props){
        super(props);

        this.chart = null;
        this.changeVisualization = this.changeVisualization.bind(this);

        this.visualization = {
          bar: getBarChartOptions,
          pie: getPieChartOptions,
        }

        this.selected = this.visualization.bar;
        this.options = this.selected(props);
        this.update = this.update.bind(this);
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
      let node = event.target;
      let index = node.getAttribute('index');

      this.selected = this.visualization[index];
      this.update(this.props)
    }

    update(state){
      this.props = state;
      this.options = this.selected(state);
      this.chart.setOption(this.options, true);
    }

    initChart(){
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(this.options);
    }
}

export default Chart;