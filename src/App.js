import { useState } from "react";
import "./App.css";
import BotaoProrio from "./widgets/botao";
import "./common/global";

import Edit from "./widgets/edit";
import { arredondarParaCima } from "./common/global";
import DropdownTamanhoPlaca from "./widgets/dropdown";

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
    const montantesVerticaisArredondadas =
      arredondarParaCima(montantesVerticais);

    setResultadosCalculos(
      "Area da parede: " +
        areaTotal +
        "M2 \nQuantidade de Placas: " +
        quantidadePlacasArredondadas +
        "\nPerfis Horizontal: " +
        quantosMetrosPerfilHorizontais +
        "MT \nPerfis Vertical: " +
        montantesVerticaisArredondadas
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Edit
          title="Descrição "
          placeholder="Exemplo: Quarto"
          onValueChange={value => setLargura(value)}
        />
        <p></p>
        <Edit
          title="Largura da parede MT "
          placeholder="Exemplo: 4"
          onValueChange={value => setLargura(value)}
        />
        <p></p>
        <Edit
          title="Altura da parede MT "
          placeholder="Exemplo: 2,8"
          onValueChange={value => setAltura(value)}
        />
        <p></p>
        <DropdownTamanhoPlaca title={"Dimensões da placa "} />
        <p></p>
        <BotaoProrio title={"Calcular"} onClick={funcao} />
        <p></p>
        <p>{resultadosCalculos}</p>
      </header>
    </div>
  );
}

export default App;
