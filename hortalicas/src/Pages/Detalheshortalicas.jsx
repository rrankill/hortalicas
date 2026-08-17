import React from "react";
import { Link, useParams } from "react-router-dom";

function DetalhesHortalicas() {
  const { nome } = useParams();
  const nomeTratado = nome ? nome.toLowerCase().trim() : "";

  const hortalicas = {
    alface: {
      nome: "Alface",
      especie: "Lactuca sativa",
      nutrientes: "A alface possui água, fibras, vitamina A, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para a hidratação, o funcionamento do intestino e uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    },
    tomate: {
      nome: "Tomate",
      especie: "Solanum lycopersicum",
      nutrientes: "O tomate possui vitamina C, vitamina K, potássio, folato e licopeno.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer compostos antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80",
    },
    cenoura: {
      nome: "Cenoura",
      especie: "Daucus carota",
      nutrientes: "A cenoura é rica em betacaroteno, fibras, vitamina K, potássio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer nutrientes importantes.",
      imagem: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    },
    pepino: {
      nome: "Pepino",
      especie: "Cucumis sativus",
      nutrientes: "O pepino possui bastante água, fibras, vitamina K e minerais.",
      beneficios: "Pode contribuir para a hidratação e para uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    },
    brocolis: {
      nome: "Brócolis",
      especie: "Brassica oleracea",
      nutrientes: "O brócolis possui fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    },
    pimentao: {
      nome: "Pimentão",
      especie: "Capsicum annuum",
      nutrientes: "O pimentão possui vitamina C, vitamina A, fibras e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    },
    couve: {
      nome: "Couve",
      especie: "Brassica oleracea var. acephala",
      nutrientes: "A couve possui fibras, vitamina C, vitamina K, vitamina A, cálcio e ferro.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e fibras.",
      imagem: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80",
    },
    espinafre: {
      nome: "Espinafre",
      especie: "Spinacia oleracea",
      nutrientes: "O espinafre possui ferro, fibras, vitamina A, vitamina C, vitamina K e folato.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    },
    "rúcula": {
      nome: "Rúcula",
      especie: "Eruca vesicaria",
      nutrientes: "A rúcula possui fibras, vitamina A, vitamina C, vitamina K, folato e cálcio.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://i.pinimg.com/1200x/80/39/78/8039781f174d8d9d6aa5e58d394624a0.jpg",
    },
    rucula: {
      nome: "Rúcula",
      especie: "Eruca vesicaria",
      nutrientes: "A rúcula possui fibras, vitamina A, vitamina C, vitamina K, folato e cálcio.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "",
    },
    "agrião": {
      nome: "Agrião",
      especie: "Nasturtium officinale",
      nutrientes: "O agrião possui vitamina C, vitamina A, vitamina K, cálcio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    },
    agriao: {
      nome: "Agrião",
      especie: "Nasturtium officinale",
      nutrientes: "O agrião possui vitamina C, vitamina A, vitamina K, cálcio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    },
    repolho: {
      nome: "Repolho",
      especie: "Brassica oleracea var. capitata",
      nutrientes: "O repolho possui fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80",
    },
    chuchu: {
      nome: "Chuchu",
      especie: "Sechium edule",
      nutrientes: "O chuchu possui água, fibras, vitamina C, folato e minerais.",
      beneficios: "Pode contribuir para a hidratação e para uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    },
    abobrinha: {
      nome: "Abobrinha",
      especie: "Cucurbita pepo",
      nutrientes: "A abobrinha possui água, fibras, vitamina C, vitamina A, potássio e folato.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://images.unsplash.com/photo-1563252722-6434563a985d?auto=format&fit=crop&w=800&q=80",
    },
    "batata-doce": {
      nome: "Batata-doce",
      especie: "Ipomoea batatas",
      nutrientes: "A batata-doce possui carboidratos, fibras, potássio, vitamina A e vitamina C.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer energia, fibras e nutrientes.",
      imagem: "https://images.unsplash.com/photo-1596097635121-14b38c7b8a37?auto=format&fit=crop&w=800&q=80",
    },
    mandioca: {
      nome: "Mandioca",
      especie: "Manihot esculenta",
      nutrientes: "A mandioca possui carboidratos, fibras, vitamina C e alguns minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer energia.",
      imagem: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=800&q=80",
    },
    nabo: {
      nome: "Nabo",
      especie: "Brassica rapa",
      nutrientes: "O nabo possui fibras, vitamina C, folato, potássio e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
    },
    beterraba: {
      nome: "Beterraba",
      especie: "Beta vulgaris",
      nutrientes: "A beterraba possui fibras, folato, potássio, vitamina C e compostos antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras, vitaminas e minerais.",
      imagem: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&q=80",
    },
    cebola: {
      nome: "Cebola",
      especie: "Allium cepa",
      nutrientes: "A cebola possui fibras, vitamina C, folato, potássio e compostos antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer compostos antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    },
    salsa: {
      nome: "Salsa",
      especie: "Petroselinum crispum",
      nutrientes: "A salsa possui vitamina A, vitamina C, vitamina K, folato e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    },
    ervilha: {
      nome: "Ervilha",
      especie: "Pisum sativum",
      nutrientes: "A ervilha possui proteínas vegetais, fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer proteínas vegetais, fibras e vitaminas.",
      imagem: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
    },
  };

  const hortalica = hortalicas[nomeTratado];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#143219",
        backgroundImage: `linear-gradient(rgba(15, 38, 18, 0.8), rgba(15, 38, 18, 0.9)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#ffffff",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "10px 18px",
            marginBottom: "20px",
            backgroundColor: "#2e8b3c",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
        >
          ← Voltar
        </Link>

        {hortalica ? (
          <div
            style={{
              backgroundColor: "rgba(38, 76, 43, 0.95)",
              borderRadius: "12px",
              padding: "25px",
              display: "flex",
              gap: "25px",
              alignItems: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={hortalica.imagem}
              alt={hortalica.nome}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            />

            <div>
              <h1 style={{ margin: "0 0 10px 0", fontSize: "1.8rem", color: "#ffffff" }}>
                {hortalica.nome}
              </h1>
              <p style={{ margin: "5px 0", color: "#ffffff" }}>
                <strong>Espécie:</strong> {hortalica.especie}
              </p>
              <h2 style={{ fontSize: "1.1rem", color: "#a3e4d7", marginTop: "15px" }}>
                Nutrientes
              </h2>
              <p style={{ margin: "5px 0", fontSize: "0.95rem", color: "#ffffff" }}>
                {hortalica.nutrientes}
              </p>
              <h2 style={{ fontSize: "1.1rem", color: "#a3e4d7", marginTop: "15px" }}>
                Benefícios para a saúde
              </h2>
              <p style={{ margin: "5px 0", fontSize: "0.95rem", color: "#ffffff" }}>
                {hortalica.beneficios}
              </p>
            </div>
          </div>
        ) : (
          <h1 style={{ color: "#ffffff" }}>Hortaliça não encontrada</h1>
        )}
      </div>
    </div>
  );
}

export default DetalhesHortalicas;