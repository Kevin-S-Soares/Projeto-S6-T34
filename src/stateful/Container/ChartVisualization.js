import * as echarts from 'echarts';

class ChartVisualization{
    constructor(chartID){
        this.chartID = chartID;
        this.chart = null;

        this.initChart = this.initChart.bind(this);
        this.update = this.update.bind(this);
    }

    initChart(options){
        this.chart = echarts.init(document.getElementById('chart'));
        this.update(options);
    }

    update(options){
        this.chart.setOption(options);
    }
}

export default ChartVisualization;