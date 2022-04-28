import React from "react";
import './Chart.css';

function MeasureTypeSelection(props) {
    const measures = props.measures;
    const event = props.measureSelectionEvent;

    return (
        <div className="card mb-2">
            <div className="card-header">
                <div className="row">
                    <h5 className="offset-md-1 col-md-5">Visualização da medida de desempenho:</h5>
                    <select className="select-form col-md-5" onChange={event}>
                        {measures.map((x, index) => {
                            return (
                                <option key={index} value={index}>{x.getName()}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="card-body">
                <div className="chart" id="chart"></div>
            </div>
        </div>
    );
}

export default MeasureTypeSelection;