import React from "react";
import { Link, useParams } from "react-router-dom";
    import { hortalicas } from "../data/hortalicas";

function DetalhesHortalicas() {
  const { id } = useParams();


  const hortalica = hortalicas.find(h => h.id === Number(id));
  if (!hortalica) {
    return (
      <div>
      <h1 style={{ color: "#030303" }}>Hortaliça não encontrada</h1>;
    </div>
    ) 
  }

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