import CardHortalicas from '../components/CarHortalicas';
import { hortalicas } from '../data/hortalicas';

function Home() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}> 🌳 Hortalicas</h1>
      <p style={{ color: '#a8a8b3', marginBottom: '40px' }}>Seu catálogo técnico de hortalicas.</p>
      
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Usamos o método map do JavaScript para varrer a lista de filmes e gerar um componente para cada um */}
        {hortalicas.map((hortalica) => (
          <CardHortalicas
            key={hortalica.id} // É obrigatório passar uma prop única chamada 'key' no React quando geramos listas
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