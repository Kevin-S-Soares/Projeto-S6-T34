import InputNumber from "../InputNumber";

function ArriveData(props) {
    return (
        <fieldset className="card mt-2 ps-0 pe-0">
            <legend className="card-header">Dados de chegada</legend>
            <div className="card-body">
                <InputNumber
                    label='Ritmo médio de chegada (λ): '
                    index='lambda'
                    event={props.event}
                    value={props.value.lambda}
                />
                <InputNumber
                    label='Intervalo médio entre chegadas: '
                    index='ic'
                    event={props.event}
                    value={props.value.ic}
                />
            </div>
        </fieldset>
    );
}

export default ArriveData;