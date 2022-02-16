import InputNumber from "../InputNumber";

function SystemData(props) {
    return (
        <fieldset>
            <legend>Dados do sistema</legend>
            <InputNumber
                label='Número médio de clientes no sistema: '
                index='ns'
                event={props.event}
                value={props.value.ns}
            />
            <br></br>
            <InputNumber
                label='Tempo médio de permanência no sistema: '
                index='ts'
                event={props.event}
                value={props.value.ts}
            />
        </fieldset>
    );
}

export default SystemData;