import InputNumber from "../InputNumber";

function OtherData(props) {
    return (
        <fieldset className="card mt-2 ps-0 pe-0">
            <legend className="card-header">Outros dados</legend>
            <div className="card-body">
                <InputNumber
                    label='Duração do ciclo (ρ): '
                    index='rho'
                    event={props.event}
                    value={props.value.rho}
                />
                <InputNumber
                    label='Tempo fora do sistema: '
                    index='tfs'
                    event={props.event}
                    value={props.value.tfs}
                />
            </div>
        </fieldset>
    );
}

export default OtherData;