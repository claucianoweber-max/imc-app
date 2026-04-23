import React, { useState } from "react";
import "./CalculadoraIMC.css";

function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Preencha todos os campos!");
      return;
    }

    const alturaMetros = altura / 100;
    const resultado = peso / (alturaMetros * alturaMetros);
    const imcFinal = resultado.toFixed(2);

    setImc(imcFinal);
    setClassificacao(getClassificacao(imcFinal));
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    return "Obesidade";
  };

  // Define cor dinâmica
  const getCor = () => {
    if (classificacao === "Peso normal") return "green";
    if (classificacao === "Sobrepeso") return "orange";
    if (classificacao === "Obesidade") return "red";
    return "gray";
  };

  // Limpar dados
  const limpar = () => {
    setPeso("");
    setAltura("");
    setImc(null);
    setClassificacao("");
  };

  return (
    <div className="container">
      <h2>Calculadora de IMC</h2>
      <h3>Preencha seu peso e altura para calcular o IMC.</h3>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular</button>
      <button onClick={limpar} className="limpar">Limpar</button>

      {imc && (
        <div className="resultado" style={{ borderColor: getCor() }}>
          <p>Peso: {peso} kg</p>
          <p>Altura: {altura} cm</p>
          <p>IMC: <strong>{imc}</strong></p>
          <p style={{ color: getCor() }}>
            Nota: <strong>{classificacao}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default CalculadoraIMC;
