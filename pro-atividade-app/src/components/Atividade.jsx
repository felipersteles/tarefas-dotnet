import React from "react";

export default function Atividades(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  // utilizando a mesma função pra alterar dois estilos diferentes
  function prioridadeStyle(param, icone) {
    switch (param) {
      case "1":
        return icone ? "smile" : "success";
      case "2":
        return icone ? "meh" : "dark";
      case "3":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  return (
    <div
      key={props.atv.id}
      className={
        "card mb-2 shadow-sm border-" + prioridadeStyle(props.atv.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-2">{props.atv.id}</span>-{" "}
            {props.atv.titulo}
          </h5>
          <h6>
            Prioridade:
            <i
              className={
                "ms-1 me-1 far fa-" +
                prioridadeStyle(props.atv.prioridade, true)
              }
            ></i>
            {prioridadeLabel(props.atv.prioridade)}
          </h6>
        </div>
        <p className="card-text">{props.atv.descricao}</p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => props.pegarAtividade(props.atv.id)}
          >
            <i className="fas fa-pen me-2"></i>Editar
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.handleDelete(props.atv.id)}
            // arrow function pra ele deletar somente ao clicar e nao considerar o parametro passado
          >
            <i className="fas fa-trash me-2"></i>Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
