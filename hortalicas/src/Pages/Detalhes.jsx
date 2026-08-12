import { Link, useParams } from "react-router-dom";

function Detalhes() {
  const { nome } = useParams();

  const hortalicas = {
    alface: {
      nome: "Alface",
      especie: "Lactuca sativa",
      nutrientes: "A alface possui água, fibras, vitamina A, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para a hidratação, o funcionamento do intestino e uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80"
    },

    tomate: {
      nome: "Tomate",
      especie: "Solanum lycopersicum",
      nutrientes: "O tomate possui vitamina C, vitamina K, potássio, folato e licopeno.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer compostos antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80"
    },

    cenoura: {
      nome: "Cenoura",
      especie: "Daucus carota",
      nutrientes: "A cenoura é rica em betacaroteno, fibras, vitamina K, potássio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer nutrientes importantes.",
      imagem: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80"
    },

    pepino: {
      nome: "Pepino",
      especie: "Cucumis sativus",
      nutrientes: "O pepino possui bastante água, fibras, vitamina K e minerais.",
      beneficios: "Pode contribuir para a hidratação e para uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80"
    },

    brocolis: {
      nome: "Brócolis",
      especie: "Brassica oleracea",
      nutrientes: "O brócolis possui fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80"
    },

    pimentao: {
      nome: "Pimentão",
      especie: "Capsicum annuum",
      nutrientes: "O pimentão possui vitamina C, vitamina A, fibras e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80"
    }
  };

  const hortalica = hortalicas[nome];

  if (!hortalica) {
    return (
      <div>
        <h1>Hortaliça não encontrada</h1>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="pagina-detalhes">

      <Link to="/">← Voltar</Link>

      <div className="card-detalhes">

        <img
          src={hortalica.imagem}
          alt={hortalica.nome}
          className="imagem-detalhes"
        />

        <div>
          <h1>{hortalica.nome}</h1>

          <p>
            <strong>Espécie:</strong> {hortalica.especie}
          </p>

          <h2>Nutrientes</h2>
          <p>{hortalica.nutrientes}</p>

          <h2>Benefícios para a saúde</h2>
          <p>{hortalica.beneficios}</p>
        </div>

      </div>

    </div>
  );
}

export default Detalhes;