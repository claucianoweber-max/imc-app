import React from "react";
import CalculadoraIMC from "./components/CalculadoraIMC";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", background: "rgb(117, 135, 209)" }}>
        Aplicação de IMC
      </h1>

      <CalculadoraIMC />
    </div>
  );
}

export default App;
