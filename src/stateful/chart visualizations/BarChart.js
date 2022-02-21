function getBarChartOptions(state){
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

export default getBarChartOptions;