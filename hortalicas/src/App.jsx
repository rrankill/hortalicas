import './index.css';
import CardHortalicas from './components/Cardhortalicas';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hortalicas</h1>
      <p style={{ marginBottom: '30px', color: '#a8a8b3' }}>Bem-vindo à nossa loja de hortalças! A melhor seleção de produtos frescos e saudáveis.</p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <CardHortalicas
          titulo="Alface"
          descriçao="Alface fresca e crocante, perfeita para saladas."
          imagem=""
        />
        <CardHortalicas
          titulo="Tomate"
          descriçao="Tomates maduros e suculentos, ideais para molhos e saladas."
          imagem="https://example.com/tomate.jpg"
        />
        <CardHortalicas
          titulo="Cenoura"
          descriçao="Cenouras doces e nutritivas, ótimas para lanches e receitas."
          imagem="https://example.com/cenoura.jpg"
        />
        <CardHortalicas
          titulo="Pepino"
          descriçao="Pepinos frescos e crocantes, perfeitos para saladas e conservas."
          imagem="https://example.com/pepino.jpg"
        />
        <CardHortalicas
          titulo="Brócolis"
          descriçao="Brócolis frescos e nutritivos, ideais para saladas e pratos quentes."
          imagem="https://example.com/brócolis.jpg"
        />
        <CardHortalicas
          titulo="Pimentão"
          descriçao="Pimentões coloridos e saborosos, ótimos para receitas e saladas."
          imagem="https://example.com/pimentão.jpg"
        />
      </div>
    </div>
  );
}

export default App;