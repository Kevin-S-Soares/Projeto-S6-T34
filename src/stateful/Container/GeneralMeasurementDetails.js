import React from "react";

function GeneralMeasurementDetails(props) {
    if (props.values.length === 0) {
        return (
            <></>
        );
    }
    return (
        <div className="card mb-2">
            <div className="card-header text-center">
                <h3>Medidas de desempenho gerais</h3>
            </div>
            <div className="card-body">
                <dl className="row">
                    {props.values.map((x) => {
                        return (
                            <>
                                <dt className="col-sm-6 text-end">{x.description}</dt>
                                <dd className="col-md-6 col-6 text-start">{x.value}</dd>
                            </>
                        );
                    })}
                </dl>
            </div>
        </div>
    );
}

export default GeneralMeasurementDetails;