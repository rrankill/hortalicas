function CardHortalicas({ titulo, descriçao, imagem }) {
    return (
    <div className="card-hortalicas">
        <img src={imagem} alt={`Imagem da hortalica ${titulo}`} className="card-imagem" />
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-descriçao">{descriçao}</p>
    </div>
  );
}

export default CardHortalicas; 