import { useState } from 'react';
import './App.css';
import BotaoProrio from './widgets/botao';
import DropBox from './widgets/dropdown';
import EditProprio from './widgets/edit';

function App() {

  const [descricao, setDescricao] = useState('');

  function funcao() {
    console.log('teste: ' + descricao)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={descricao} onChange={e => setDescricao(e.target.value)}></input>
        <EditProprio title={'Descrição'} />
        <p></p>
        <DropBox></DropBox>
        <p></p>
        <EditProprio title={'Largura'} />
        <p>X</p>
        <EditProprio title={'Altura'} />
        <p></p>
        <BotaoProrio title={'Calcular'} onClick={funcao} />
      </header>
    </div>
  );
}
export default App;


