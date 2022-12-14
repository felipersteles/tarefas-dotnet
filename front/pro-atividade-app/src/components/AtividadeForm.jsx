import { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  // quando algum estado é executado ele também é utilizado se não for passada nenhuma dependencia
  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
  }, [props.atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) return props.atividadeSelecionada;
    return atividadeInicial;
  }

  const handleCancelar = (e) => {
    e.preventDefault();

    // cancelar atividade
    setAtividade(atividadeInicial);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.atividadeSelecionada.id !== 0) props.atualizarAtividade(atividade);
    else props.addAtividade(atividade);

    setAtividade(atividadeInicial)
  };

  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            name="titulo"
            value={atividade.titulo}
            onChange={inputTextHandler}
            id="titulo"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Prioridade</label>
          <select
            id="prioridade"
            className="form-select"
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}
          >
            <option defaultValue="NaoDefinido">Selecionar...</option>
            <option value="Baixa"> Baixa </option>
            <option value="Normal"> Normal </option>
            <option value="Alta"> Alta </option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            name="descricao"
            value={atividade.descricao}
            onChange={inputTextHandler}
            id="descricao"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-12">
          {atividade.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fas fa-plus me-2"></i>
              Atividade
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-3" type="submit">
                <i className="fas fa-plus me-2"></i>
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={handleCancelar}
              >
                <i className="fas fa-plus me-2"></i>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
