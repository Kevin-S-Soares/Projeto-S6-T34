import InputNumber from "../InputNumber";

function OtherData(props) {
    return (
        <fieldset>
            <legend>Outros dados</legend>
            <InputNumber
                label='Duração do ciclo (ρ): '
                index='rho'
                event={props.event}
                value={props.value.rho}
            />
            <br></br>
            <InputNumber
                label='Tempo fora do sistema: '
                index='tfs'
                event={props.event}
                value={props.value.tfs}
            />
        </fieldset>
    );
}

export default OtherData;