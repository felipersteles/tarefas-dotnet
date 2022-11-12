import React from "react";
import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((atv) => (
        <Atividade
          key={atv.id}
          handleDelete={props.handleDelete}
          pegarAtividade={props.pegarAtividade}
          atv={atv}
        />
      ))}
    </div>
  );
}
