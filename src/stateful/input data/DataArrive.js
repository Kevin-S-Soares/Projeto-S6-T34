import InputNumber from "../InputNumber";

function DataArrive(props) {
    return (
        <fieldset>
            <legend>Dados de chegada</legend>
            <InputNumber
                label='Ritmo médio de chegada (λ): '
                index='lambda'
                event={props.event}
                value={props.value.lambda}
            />
            <br></br>
            <InputNumber
                label='Intervalo médio entre chegadas: '
                index='ic'
                event={props.event}
                value={props.value.ic}
            />
        </fieldset>
    );
}

export default DataArrive;