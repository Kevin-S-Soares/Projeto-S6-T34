import InputNumber from "../InputNumber";

function DataQueue(props) {
    return (
        <fieldset>
            <legend>Dados de fila</legend>
            <InputNumber
                label='Número médio de clientes na fila: '
                index='nf'
                event={props.event.nf}
                value={props.value.nf()}
            />
            <br></br>
            <InputNumber
                label='Tempo médio de permanência na fila: '
                index='tf'
                event={props.event.tf}
                value={props.value.tf()}
            />
        </fieldset>
    );
}

export default DataQueue;