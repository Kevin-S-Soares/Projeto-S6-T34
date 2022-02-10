import InputNumber from "../InputNumber";

function DataService(props) {
    return (
        <fieldset>
            <legend>Dados de atendimento</legend>
            <InputNumber
                label='Tempo médio de permanência no atendimento: '
                index='ta'
                event={props.setValues}
            />
            <br></br>
            <InputNumber
                label='Número médio de clientes no atendimento: '
                index='na'
                event={props.setValues}
            />
            <br></br>
            <InputNumber
                label='Quantidade de atendentes: '
                index='m'
                event={props.setValues}
            />                    <br></br>
            <InputNumber
                label='Ritmo médio de atendimento de cada atendente (µ): '
                index='m'
                event={props.setValues}
            />
        </fieldset>
    );
}

export default DataService;