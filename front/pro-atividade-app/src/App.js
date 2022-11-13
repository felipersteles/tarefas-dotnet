import React, { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from "./api/atividade";

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
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  const pegaTodasAtividades = async () => {
    const response = await api.get("atividade");

    return response.data;
  };

  useEffect(() => {
    // professor fez com esse async e await mas nao creio que seja necessario
    // se estas lendo isso e sabes a causa e efeito por favor entrar em contato comigo tamo junto s2
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();

      if (todasAtividades) setAtividades(todasAtividades);
    };

    getAtividades();
  }, []);

  const addAtividade = async (atv) => {
    const response = await api.post("atividade", atv);
    // console.log(response.data);

    setAtividades([...atividades, response.data]);
    // console.log(atividades);
    setAtividade({ id: 0 });
  };

  // arrow function so pra brincar
  const handleDelete = async (id) => {
    const response = await api.delete(`atividade/${id}`);
    if (response) {
      const atividadesFiltradas = atividades.filter(
        (atividade) => atividade.id !== id
      );
      setAtividades([...atividadesFiltradas]);
    }
  };

  const pegarAtividade = (id) => {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  };

  const atualizarAtividade = async (atv) => {
    const response = await api.put(`atividade/${atv.id}`, atv);
    const { id } = response.data;

    setAtividades(
      atividades.map((item) => (item.id === id ? response.data : item))
    );
    setAtividade({ id: 0 });
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
