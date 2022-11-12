import React, { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

// const estadoInicial = [
//   {
//     id: 1,
//     prioridade: "1",
//     titulo: "titulo 1",
//     descricao: "Primeira atividade",
//   },
//   {
//     id: 2,
//     prioridade: "1",
//     titulo: "titulo 2",
//     descricao: "Segunda atividade",
//   },
// ];

const App = () => {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
      setIndex(Math.max.apply(
        Math,
        atividades.map((item) => item.id)
      ) + 1,)
  },[atividades])

  function addAtividade(atv) {
    setAtividades([...atividades, { ...atv, id:  index}]);
    // console.log(atividades);
    setAtividade({id: 0});
  }

  // arrow function so pra brincar
  const handleDelete = (id) => {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  };

  const pegarAtividade = (id) => {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  };

  const atualizarAtividade = (atv) => {
    setAtividades(atividades.map((item) => (item.id === atv.id ? atv : item)));
    setAtividade({id: 0})
  };

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
        atividadeSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        handleDelete={handleDelete}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
};

export default App;
