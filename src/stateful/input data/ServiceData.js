import InputNumber from "../InputNumber";

function ServiceData(props) {
    return (
        <fieldset className="card mt-2 ps-0 pe-0">
            <legend className="card-header">Dados de atendimento</legend>
            <div className="card-body">
            <InputNumber
                label='Número médio de clientes no atendimento: '
                index='na'
                event={props.event}
                value={props.value.na}
            />
            <InputNumber
                label='Tempo médio de permanência no atendimento: '
                index='ta'
                event={props.event}
                value={props.value.ta}
            />
            <InputNumber
                label='Quantidade de atendentes: '
                index='m'
                event={props.event}
                value={props.value.m}
            />                    
            <InputNumber
                label='Ritmo médio de atendimento de cada atendente (µ): '
                index='mu'
                event={props.event}
                value={props.value.mu}
            />
            </div>
        </fieldset>
    );
}

export default ServiceData;