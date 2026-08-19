import CardHortalicas from '../components/CardHortalicas';
import { hortalicas } from '../data/hortalicas';

function Home() {
  return (
    <div className="pagina-home">

      <h1 className="titulo-home">
        🌳 Hortaliças
      </h1>

      <p className="subtitulo-home">
        Descubra os benefícios das hortaliças para uma vida saudável!
      </p>

      <div className="lista-hortalicas">
        {hortalicas.map((hortalica) => (
          <CardHortalicas
            key={hortalica.id}
            id={hortalica.id}
            titulo={hortalica.titulo}
            propaganda={hortalica.propaganda}
            imagem={hortalica.imagem}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;