import React from "react";
import { Link, useParams } from "react-router-dom";

function DetalhesHortalicas() {
  const { id } = useParams();
  const nomeTratado = nome ? nome.toLowerCase().trim() : "";

  const hortalicas = {
    1: {
      nome: "Alface",
      especie: "Lactuca sativa",
      nutrientes: "A alface possui água, fibras, vitamina A, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para a hidratação, o funcionamento do intestino e uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    },
    2: {
      nome: "Tomate",
      especie: "Solanum lycopersicum",
      nutrientes: "O tomate possui vitamina C, vitamina K, potássio, folato e licopeno.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer compostos antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80",
    },
    3: {
      nome: "Cenoura",
      especie: "Daucus carota",
      nutrientes: "A cenoura é rica em betacaroteno, fibras, vitamina K, potássio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer nutrientes importantes.",
      imagem: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    },
    4: {
      nome: "Pepino",
      especie: "Cucumis sativus",
      nutrientes: "O pepino possui bastante água, fibras, vitamina K e minerais.",
      beneficios: "Pode contribuir para a hidratação e para uma alimentação equilibrada.",
      imagem: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    },
    5: {
      nome: "Brócolis",
      especie: "Brassica oleracea",
      nutrientes: "O brócolis possui fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    },
    6: {
      nome: "Pimentão",
      especie: "Capsicum annuum",
      nutrientes: "O pimentão possui vitamina C, vitamina A, fibras e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    },
    7: {
      nome: "Couve",
      especie: "Brassica oleracea var. acephala",
      nutrientes: "A couve possui fibras, vitamina C, vitamina K, vitamina A, cálcio e ferro.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e fibras.",
      imagem: "https://tse1.mm.bing.net/th/id/OIP.QE9q_DtYMI4GZTUvD94fqgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    8: {
      nome: "Espinafre",
      especie: "Spinacia oleracea",
      nutrientes: "O espinafre possui ferro, fibras, vitamina A, vitamina C, vitamina K e folato.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    },
    9: {
      nome: "Rúcula",
      especie: "Eruca vesicaria",
      nutrientes: "A rúcula possui fibras, vitamina A, vitamina C, vitamina K, folato e cálcio.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=800&q=80",
    },
    10: {
      nome: "Rúcula",
      especie: "Eruca vesicaria",
      nutrientes: "A rúcula possui fibras, vitamina A, vitamina C, vitamina K, folato e cálcio.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "",
    },
    11: {
      nome: "Agrião",
      especie: "Nasturtium officinale",
      nutrientes: "O agrião possui vitamina C, vitamina A, vitamina K, cálcio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://tse2.mm.bing.net/th/id/OIP.GSjcMhRCPBd13ieha34cmwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    12: {
      nome: "Agrião",
      especie: "Nasturtium officinale",
      nutrientes: "O agrião possui vitamina C, vitamina A, vitamina K, cálcio e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas, minerais e antioxidantes.",
      imagem: "https://tse2.mm.bing.net/th/id/OIP.GSjcMhRCPBd13ieha34cmwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    13: {
      nome: "Repolho",
      especie: "Brassica oleracea var. capitata",
      nutrientes: "O repolho possui fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://www.saudevitalidade.com/wp-content/uploads/2024/06/repolho-1636485393069_v2_4x3-1024x768.jpg",
    },
    14: {
      nome: "Chuchu",
      especie: "Sechium edule",
      nutrientes: "O chuchu possui água, fibras, vitamina C, folato e minerais.",
      beneficios: "Pode contribuir para a hidratação e para uma alimentação equilibrada.",
      imagem: "https://th.bing.com/th/id/R.0532ffafe8c01d837ad289efe8ff975a?rik=D%2fHwbUKLil6LXQ&pid=ImgRaw&r=0",
    },
    15: {
      nome: "Abobrinha",
      especie: "Cucurbita pepo",
      nutrientes: "A abobrinha possui água, fibras, vitamina C, vitamina A, potássio e folato.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://images.unsplash.com/photo-1563252722-6434563a985d?auto=format&fit=crop&w=800&q=80",
    },
    16: {
      nome: "Batata-doce",
      especie: "Ipomoea batatas",
      nutrientes: "A batata-doce possui carboidratos, fibras, potássio, vitamina A e vitamina C.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer energia, fibras e nutrientes.",
      imagem: "https://tse3.mm.bing.net/th/id/OIP.XE1EsAANEGBHeLgnB1pOEgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    17: {
      nome: "Mandioca",
      especie: "Manihot esculenta",
      nutrientes: "A mandioca possui carboidratos, fibras, vitamina C e alguns minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer energia.",
      imagem: "https://tse1.mm.bing.net/th/id/OIP.DtnBYwW7w8MwkVMyHeY6TgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    18: {
      nome: "Nabo",
      especie: "Brassica rapa",
      nutrientes: "O nabo possui fibras, vitamina C, folato, potássio e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras e vitaminas.",
      imagem: "https://tse2.mm.bing.net/th/id/OIP.c-PMtRJGRq518uo8eDGk7gHaFx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    19: {
      nome: "Beterraba",
      especie: "Beta vulgaris",
      nutrientes: "A beterraba possui fibras, folato, potássio, vitamina C e compostos antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer fibras, vitaminas e minerais.",
      imagem: "https://tse3.mm.bing.net/th/id/OIP.kuY1gdUmEHQwy-l1kQTRUwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    20: {
      nome: "Cebola",
      especie: "Allium cepa",
      nutrientes: "A cebola possui fibras, vitamina C, folato, potássio e compostos antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer compostos antioxidantes.",
      imagem: "https://th.bing.com/th/id/R.3d113d987d55a9211d1e7bf9ad255117?rik=szo%2fOEN0h%2fiLBg&pid=ImgRaw&r=0",
    },
    21: {
      nome: "Salsa",
      especie: "Petroselinum crispum",
      nutrientes: "A salsa possui vitamina A, vitamina C, vitamina K, folato e antioxidantes.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer vitaminas e antioxidantes.",
      imagem: "https://th.bing.com/th/id/R.12ba1ab33eb9af27a11cd31cd9c8d451?rik=vgWeCxck27mfoQ&pid=ImgRaw&r=0",
    },
    22: {
      nome: "Ervilha",
      especie: "Pisum sativum",
      nutrientes: "A ervilha possui proteínas vegetais, fibras, vitamina C, vitamina K, folato e minerais.",
      beneficios: "Pode contribuir para uma alimentação equilibrada e fornecer proteínas vegetais, fibras e vitaminas.",
      imagem: "https://tse1.mm.bing.net/th/id/OIP.g8pkpUtKpgEu6MMcEmfRuQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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