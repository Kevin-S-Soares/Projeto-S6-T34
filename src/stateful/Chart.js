import React from "react";
import * as echarts from 'echarts';
import './Chart.css';
import getBarChartOptions from "./chart visualizations/BarChart";
import getPieChartOptions from "./chart visualizations/PieChart"

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.chart = null;
    

    this.visualization = {
      bar: getBarChartOptions,
      pie: getPieChartOptions,
    }

    this.selected = this.visualization.bar;
    this.options = this.selected(props);
    this.active = null;


    this.update = this.update.bind(this);
    this.changeVisualization = this.changeVisualization.bind(this);
  }

  render() {
    return (
      <div className="row gx-0">
        <div className="chart col-xl-9 table-responsive" id="chart">
        </div>
        <div className="card ps-0 pe-0 offset-xl-1 col-xl-2">
          <h5 className="card-header text-center">Visualização</h5>
          <div className="card-body text-center">
            <button index="bar" id="bar" className="btn btn-primary ps-2 pe-3 btn-sm" onClick={this.changeVisualization}>Gráfico de barras</button>
            <br/>
            <button index="pie" id="pie" className="btn btn-primary mt-2 btn-sm" onClick={this.changeVisualization}>Gráfico de setores</button>
            <br/>
          </div>
        </div>
      </div>
    );
  }

  changeVisualization(event) {
    let node = event.target;
    let index = node.getAttribute('index');

    this.active.disabled = false;
    this.active = node;
    this.active.disabled = true;

    this.selected = this.visualization[index];
    this.update(this.props)
  }

  update(state) {
    this.props = state;
    this.options = this.selected(state);
    this.chart.setOption(this.options, true);
  }

  initChart() {
    this.active = document.getElementById('bar');
    this.active.disabled = true;
    this.chart = echarts.init(document.getElementById('chart'));
    this.chart.setOption(this.options);
  }
}

export default Chart;