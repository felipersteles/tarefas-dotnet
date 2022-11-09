import React, { useState } from "react";

const estadoInicial = [
  {
    id: 1,
    prioridade: '1',
    titulo: "titulo 1",
    descricao: "Primeira atividade",
  },
  {
    id: 2,
    prioridade: '1',
    titulo: "titulo 2",
    descricao: "Segunda atividade",
  },
];

const App = () => {
  const [atividades, setAtividades] = useState(estadoInicial);

  function addAtividade(evento) {
    evento.preventDefault();

    const novaAtividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };

    setAtividades([...atividades, { ...novaAtividade }]);
    console.log(atividades);
  }

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
        return icone ? "smile" : 'success';
      case "2":
        return icone ? "meh" : 'dark';
      case "3":
        return icone ? "frown" : 'warning';
      default:
        return "Não definido";
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">
            Prioridade
          </label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1"> Baixa </option>
            <option value="2"> Normal </option>
            <option value="3"> Alta </option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={addAtividade}>
            Enviar
          </button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map((atv) => (
          <div key={atv.id} className={"card mb-2 shadow-sm border-"+prioridadeStyle(atv.prioridade)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-2">{atv.id}</span>-{" "}
                  {atv.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <i className={"ms-1 me-1 far fa-" + prioridadeStyle(atv.prioridade, true)}></i>
                  {prioridadeLabel(atv.prioridade)}
                </h6>
              </div>
              <p className="card-text">{atv.descricao}</p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary me-2">
                  <i className="fas fa-pen me-2"></i>Editar
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fas fa-trash me-2"></i>Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
