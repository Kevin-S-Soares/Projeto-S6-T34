function InputNumber(props) {
    return (
        <dl className="row">
            <dt className="col-sm-6">{props.label}</dt>
            <dd>
                <input
                className="col-sm-5"
                    type="number"
                    index={props.index}
                    onInput={props.event}
                    value={props.value}
                    min="0.1"
                    step="0.1"
                    readOnly={props.readonly === undefined ? false : true}
                />
            </dd>
        </dl>
    );
}

export default InputNumber;