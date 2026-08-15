import CardHortalicas from '../components/CardHortalicas';
import { hortalicas } from '../data/hortalicas';

function Home() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🌳 Hortaliças</h1>
      <p style={{ color: 'white', fontSize: '1.2rem' }}>
        Descubra os benefícios das hortaliças para uma vida saudável!
      </p>


      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {hortalicas.map((hortalica) => (
          <CardHortalicas
            key={hortalica.id}
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