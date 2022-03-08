import InputNumber from "../InputNumber";

function QueueData(props) {
    return (
        <fieldset className="card mt-2 ps-0 pe-0">
            <legend className="card-header">Dados de fila</legend>
            <div className="card-body">
                <InputNumber
                    label='Número médio de clientes na fila: '
                    index='nf'
                    event={props.event}
                    value={props.value.nf}
                />
                <InputNumber
                    label='Tempo médio de permanência na fila: '
                    index='tf'
                    event={props.event}
                    value={props.value.tf}
                />
            </div>
        </fieldset>
    );
}

export default QueueData;