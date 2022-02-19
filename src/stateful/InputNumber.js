function InputNumber(props){
    return(
        <div>
            <label>{props.label}</label>
            <input 
            type="number"
            index={props.index}
            onInput={props.event}
            value={props.value}
            min="0.1"
            step="0.1"
            readOnly={props.readonly === undefined? false: true}
            />
        </div>
    );
}

export default InputNumber;