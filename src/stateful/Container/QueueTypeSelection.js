import React from "react";

function QueueTypeSelection(props) {
    const options = props.options;
    const event = props.queueTypeSelectionEvent

    return (
        <div className="card mb-2 bg-light text-center">
            <div className="card-title mt-2">
                <div className="container row">
                    <h3 className="offset-md-3 col-md-3">Tipo de fila:</h3>
                    <select className="select-form col-md-3" onChange={event}>
                            {options.map((x, index) => {
                                return (
                                    <option key={index} value={index}>{x.getName()}</option>
                                );
                            })}
                        </select>

                </div>
            </div>
        </div>
    );
}

export default QueueTypeSelection;