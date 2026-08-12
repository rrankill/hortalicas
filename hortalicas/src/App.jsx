import './index.css';
import CardHortalicas from './components/Cardhortalicas';
import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hortalicas</h1>
      <p style={{ marginBottom: '30px', color: '#a8a8b3' }}>Bem-vindo à nossa loja de hortalças! A melhor seleção de produtos frescos e saudáveis.</p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <CardHortalicas
          titulo="Alface"
          descriçao="Alface fresca e crocante, perfeita para saladas."
          imagem="https://i.pinimg.com/1200x/e2/4b/50/e24b5064bcab846bde7c0d6a147cd987.jpg"
        />
        <CardHortalicas
          titulo="Tomate"
          descriçao="Tomates maduros e suculentos, ideais para molhos e saladas."
          imagem="https://i.pinimg.com/736x/df/58/c4/df58c4142e111d5ca439206447c5b0d4.jpg"
        />
        <CardHortalicas
          titulo="Cenoura"
          descriçao="Cenouras doces e nutritivas, ótimas para lanches e receitas."
          imagem="https://i.pinimg.com/736x/d1/a5/c3/d1a5c3640aea92a324c910d9ce5a754c.jpg"
        />
        <CardHortalicas
          titulo="Pepino"
          descriçao="Pepinos frescos e crocantes, perfeitos para saladas e conservas."
          imagem="https://i.pinimg.com/736x/81/1c/33/811c33af6dbb87fedf86c883dda02d63.jpg"
        />
        <CardHortalicas
          titulo="Brócolis"
          descriçao="Brócolis frescos e nutritivos, ideais para saladas e pratos quentes."
          imagem="https://i.pinimg.com/1200x/56/81/4f/56814fa9a87e2a580d99f61c1e0c7401.jpg"
        />
        <CardHortalicas
          titulo="Pimentão"
          descriçao="Pimentões coloridos e saborosos, ótimos para receitas e saladas."
          imagem="https://i.pinimg.com/736x/36/70/c3/3670c36d0ffd8fb06859ab0fec270088.jpg"
        />
        <CardHortalicas
          titulo="Couve"
          descriçao="Couve verde e nutritiva, excelente para refogados e sucos."
          imagem="https://i.pinimg.com/736x/fb/4a/b9/fb4ab99589032565bddd571fb6a000fb.jpg"
        />
        <CardHortalicas
          titulo="Espinafre"
          descriçao="Espinafre rico em ferro, ótimo para saladas e pratos quentes."
          imagem="https://i.pinimg.com/736x/09/2b/28/092b28de2906261662f0a9d9e294f452.jpg"
        />
        <CardHortalicas
          titulo="Rúcula"
          descriçao="Rúcula fresca e picante, perfeita para saladas."
          imagem="https://i.pinimg.com/736x/70/62/1b/70621bbc3f6b6b9453c6c02003f36e11.jpg"
        />
        <CardHortalicas
          titulo="Agrião"
          descriçao="Agrião saboroso e nutritivo, ideal para sopas e saladas."
          imagem="https://i.pinimg.com/1200x/58/7f/9e/587f9e6db5e1ffc42e0e6d2b0cac09a9.jpg"
        />
        <CardHortalicas
          titulo="Repolho"
          descriçao="Repolho crocante, ótimo para saladas e cozidos."
          imagem="https://i.pinimg.com/736x/da/5e/b0/da5eb0622a7c3e7dcaaf53e2e46a8563.jpg"
        />
        <CardHortalicas
          titulo="Chuchu"
          descriçao="Chuchu leve e versátil, usado em diversas receitas."
          imagem="https://i.pinimg.com/736x/33/60/6f/33606f8b5cf6be630d0a54d9ad76f59a.jpg"
        />
        <CardHortalicas
          titulo="Abobrinha"
          descriçao="Abobrinha fresca e macia, ideal para refogados e grelhados."
          imagem="https://i.pinimg.com/736x/c9/98/5a/c9985a2ddc478b0185805e1f8f9c59e6.jpg"
        />
        <CardHortalicas
          titulo="Batata-doce"
          descriçao="Batata-doce saborosa e energética, ótima para assados."
          imagem="https://i.pinimg.com/736x/fb/0c/49/fb0c4948ad11af7ca6a0d2928f0fc0bb.jpg"
        />
        <CardHortalicas
          titulo="Mandioquinha"
          descriçao="Mandioquinha amarela e saborosa, perfeita para sopas e purês."
          imagem="https://i.pinimg.com/736x/5f/a7/54/5fa754ae17d7aefb3f85edb3e30ff6a8.jpg"
        />
        <CardHortalicas
          titulo="Nabo"
          descriçao="Nabo crocante e suave, usado em saladas e cozidos."
          imagem="https://i.pinimg.com/736x/6f/1f/22/6f1f22bee3dd6909925ef5ca3a0adf83.jpg"
        />
        <CardHortalicas
          titulo="Beterraba"
          descriçao="Beterraba doce e colorida, ótima para saladas e sucos."
          imagem="https://i.pinimg.com/736x/de/57/fb/de57fb5fd8149a9ca67e2d62ea1b08ab.jpg"
        />
        <CardHortalicas
          titulo="Cebolinha"
          descriçao="Cebolinha fresca e aromática, ideal para temperos."
          imagem="https://i.pinimg.com/736x/14/ad/c7/14adc75f65e0f8a1f0e8d3d1a8efea1a.jpg"
        />
        <CardHortalicas
          titulo="Salsa"
          descriçao="Salsa verde e aromática, perfeita para temperar pratos."
          imagem="https://i.pinimg.com/736x/ee/f7/75/eef775f846e99db080f5728e83060af4.jpg"
        />
        <CardHortalicas
          titulo="Ervilha"
          descriçao="Ervilhas frescas e saborosas, ótimas para sopas e saladas."
          imagem="https://i.pinimg.com/1200x/4f/8a/31/4f8a318d6ee6d0e5e573bda17c49b320.jpg"
        />

      </div>
    </div>
  );
}

export default App;