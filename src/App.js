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
  const [areaPlacaSelecionada, setAreaPlacaSelecionada] = useState("");

  const [areaTotalText, setAreaTotalText] = useState("");
  const [quantidadePlacasText, setQuantidadePlacasText] = useState("");
  const [perfilHorizontalText, setPerfilHorizontalText] = useState("");
  const [perfilVerticalText, setPerfilVerticalText] = useState("");

  function funcao() {
    const areaTotal = largura * altura;

    const quantidadePlacas = areaTotal / areaPlacaSelecionada;

    const quantosMetrosPerfilHorizontais = largura * 2;

    const montantesVerticais = largura / 0.6 + 1;

    setAreaTotalText("Area M2 da parede: " + areaTotal);

    setQuantidadePlacasText(
      "Quantidade de placas: " + arredondarParaCima(quantidadePlacas)
    );

    setPerfilHorizontalText(
      "Total Metros de perfil Horizontal: " + quantosMetrosPerfilHorizontais
    );

    setPerfilVerticalText(
      "Quantidade de perfil vertical: " + arredondarParaCima(montantesVerticais)
    );
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <DropdownTamanhoPlaca
          title={"Dimensões da placa "}
          onValueSelect={value => setAreaPlacaSelecionada(value)}
        />
        <p></p>
        <BotaoProrio title={"Calcular"} onClick={funcao} />
        <p></p>
        <p>{areaTotalText}</p>
        <p>{quantidadePlacasText}</p>
        <p>{perfilHorizontalText}</p>
        <p>{perfilVerticalText}</p>
      </header>
    </div>
  );
}

export default App;
