import InputNumber from "../InputNumber";

function QueueData(props) {
    return (
        <fieldset>
            <legend>Dados de fila</legend>
            <InputNumber
                label='Número médio de clientes na fila: '
                index='nf'
                event={props.event}
                value={props.value.nf}
            />
            <br></br>
            <InputNumber
                label='Tempo médio de permanência na fila: '
                index='tf'
                event={props.event}
                value={props.value.tf}
            />
        </fieldset>
    );
}

export default QueueData;