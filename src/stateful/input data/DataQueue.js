import InputNumber from "../InputNumber";

function DataQueue(props) {
    return (
        <fieldset>
            <legend>Dados de fila</legend>
            <InputNumber
                label='Tempo médio de permanência na fila: '
                index='tf'
                event={props.setValues}
            />
            <br></br>
            <InputNumber
                label='Número médio de clientes na fila: '
                index='nf'
                event={props.setValues}
            />
        </fieldset>
    );
}

export default DataQueue;