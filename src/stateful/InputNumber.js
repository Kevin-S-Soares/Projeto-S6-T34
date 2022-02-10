function InputNumber(props){
    return(
        <div>
            <label>{props.label}</label>
            <input 
            type="number"
            id={props.id}
            index={props.index}
            onChange={props.event}
            value={props.value}
            />
        </div>
    );
}

export default InputNumber;