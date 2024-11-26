import { useState } from "react";
import "./App.css";
import BotaoProrio from "./widgets/botao";
import "./common/global";

import Edit from "./widgets/edit";
import { arredondarParaCima } from "./common/global";

function App() {
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [resultadosCalculos, setResultadosCalculos] = useState("");

  function funcao() {
    const areaTotal = largura * altura;

    const quantidadePlacas = areaTotal / (1.2 * 2.4);

    const quantosMetrosPerfilHorizontais = largura * 2;

    const montantesVerticais = largura / 0.6 + 1;

    const quantidadePlacasArredondadas = arredondarParaCima(quantidadePlacas);
    const montantesVerticaisArredondas = arredondarParaCima(montantesVerticais);

    setResultadosCalculos(
      "Area da parede: " +
        areaTotal +
        "\nQuantidade de Placas: " +
        quantidadePlacasArredondadas +
        "\nPerfis Horizontal: " +
        quantosMetrosPerfilHorizontais +
        "\nPerfis Vertical: " +
        montantesVerticaisArredondas
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Edit
          title="Largura"
          placeholder="Digite a largura"
          onValueChange={value => setLargura(value)}
        />
        <Edit
          title="Altura"
          placeholder="Digite a altura"
          onValueChange={value => setAltura(value)}
        />
        <BotaoProrio title={"Calcular"} onClick={funcao} />
        <p></p>
        <p>{resultadosCalculos}</p>
      </header>
    </div>
  );
}

export default App;
