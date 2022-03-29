import React from "react";

function QueueDetails(props) {

    const arriveType = props.values.arriveType;
    const processType = props.values.processType;
    const number = props.values.number;
    const capacity = props.values.capacity;
    const discipline = props.values.discipline;

    return (
        <div className="card mb-2">
            <div className="card-header text-center">
                <h3>Características da fila</h3>
            </div>
            <div className="card-body">
                <dl className="row">        
                    <dt className="col-md-6 col-6 text-end">Distribuição do tempo entre chegadas sucessivas:</dt>
                    <dd className="col-md-6 col-6 text-start">{arriveType}</dd>
                    <dt className="col-md-6 col-6 text-end">Distribuição do tempo entre atendimentos sucessivas:</dt>
                    <dd className="col-md-6 col-6 text-start">{processType}</dd>
                    <dt className="col-md-6 col-6 text-end">Número de postos de atendimento:</dt>
                    <dd className="col-md-6 col-6 text-start">{number}</dd>
                    <dt className="col-md-6 col-6 text-end">Capacidade física do sistema:</dt>
                    <dd className="col-md-6 col-6 text-start">{capacity}</dd>
                    <dt className="col-md-6 col-6 text-end">Disciplina de atendimento:</dt>
                    <dd className="col-md-6 col-6 text-start">{discipline}</dd>
                </dl>
            </div>
        </div>
    );
}

export default QueueDetails;