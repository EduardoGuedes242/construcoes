import './App.css';
import BotaoProrio from './widgets/botao';
import EditProprio from './widgets/edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EditProprio title={'Descrição'} />
        <p></p>
        <EditProprio title={'Largura'} />
        <p>X</p>
        <EditProprio title={'Altura'} />
        <p></p>
        <BotaoProrio title={'Calcular'} />
      </header>
    </div>
  );
}


export default App;
