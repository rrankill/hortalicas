import React from "react";
import { Link } from "react-router-dom";

function CardHortalicas({ titulo, propaganda, imagem }) {
  return (
    <div className="card-hortalicas">
      <img
        src={imagem}
        alt={`Imagem da hortaliça ${titulo}`}
        className="card-imagem"
      />

      <div className="card-conteudo">
        <h3 className="card-titulo">{titulo}</h3>

        <p className="card-propaganda">{propaganda}</p>

        <Link
          to={`/hortalica/${titulo.toLowerCase().trim()}`}
          className="btn-detalhes"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}

export default CardHortalicas;