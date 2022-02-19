import InputNumber from "../InputNumber";

function ServiceData(props) {
    return (
        <fieldset>
            <legend>Dados de atendimento</legend>
            <InputNumber
                label='Número médio de clientes no atendimento: '
                index='na'
                event={props.event}
                value={props.value.na}
            />
            <br></br>
            <InputNumber
                label='Tempo médio de permanência no atendimento: '
                index='ta'
                event={props.event}
                value={props.value.ta}
            />
            <br></br>
            <InputNumber
                label='Quantidade de atendentes: '
                index='m'
                event={props.event}
                value={props.value.m}
            />                    
            <br></br>
            <InputNumber
                label='Ritmo médio de atendimento de cada atendente (µ): '
                index='mu'
                event={props.event}
                value={props.value.mu}
            />
        </fieldset>
    );
}

export default ServiceData;