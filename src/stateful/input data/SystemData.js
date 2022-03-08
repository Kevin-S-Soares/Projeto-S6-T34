import InputNumber from "../InputNumber";

function SystemData(props) {
    return (
        <fieldset className="card mt-2 ps-0 pe-0">
            <legend className="card-header">Dados do sistema</legend>
            <div className="card-body">
                <InputNumber
                    label='Número médio de clientes no sistema: '
                    index='ns'
                    event={props.event}
                    value={props.value.ns}
                    readonly={true}
                />
                <InputNumber
                    label='Tempo médio de permanência no sistema: '
                    index='ts'
                    event={props.event}
                    value={props.value.ts}
                    readonly={true}
                />
            </div>
        </fieldset>
    );
}

export default SystemData;