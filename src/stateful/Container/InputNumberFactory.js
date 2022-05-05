import React from "react";
import InputNumber from "./InputNumber";

function InputNumberFactory(props) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h3>Variáveis</h3>
            </div>
            <div className="card-body">
                {props.inputs.map((x, key) => {
                    return (
                        <InputNumber 
                            label={x.label}
                            event={x.event}
                            value={x.value}
                            min={x.min}
                            integer={x.integer}
                            index={x.index}
                            key={key}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default InputNumberFactory;