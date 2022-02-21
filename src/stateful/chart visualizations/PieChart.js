function getPieChartOptions(state){
    return {
        tooltip: {},
        series: [
          {
            name: 'Número médio do sistema',
            type: 'pie',
            radius: 60,
            data: [{
                value: state.nf,
                name: 'Número médio de fila'
            },
            {
                value: state.na,
                name: 'Número médio de atendimento'
            }],
            right: 300
          },
          {
            name: 'Tempo médio do sistema',
            type: 'pie',
            radius: 60,
            data: [{
                value: state.tf,
                name: 'Tempo médio de fila'
            },
            {
                value: state.ta,
                name: 'Tempo médio de atendimento'
            }],
            left: 300,
          }
        ]
      };
}

export default getPieChartOptions;