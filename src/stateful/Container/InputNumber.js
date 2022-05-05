function InputNumber(props) {
    return (
        <dl className="row text-center">
            <dt className="col-sm-6 text-end">{props.label}</dt>
                <input
                    className="col-sm-4 text-start pe-0"
                    type="number"
                    index={props.index}
                    onInput={props.event}
                    value={props.value}
                    min={props.min === undefined ? (props.integer? "1" : "0.1")  : props.min}
                    step={props.integer ? "1" : "0.1"}
                    readOnly={props.readonly === undefined ? false : true}
                />
        </dl>
    );
}

export default InputNumber;