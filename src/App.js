import logo from './logo.svg';
import './App.css';
import Button from './components/StatelessComponent';
import StatefulButton from './components/StatefulComponent';
import SideEffectButton from './components/SideEffectComponent';
import UseMemoComponent from './components/UseMemoComponent';
import { UseRefComponent } from './components/UseRefComponent';
import { ContextComponent } from './components/ContextComponent';
import ReducerComponent from './components/ReducerComponent';
import TodoReducerComponent from './components/TodoReducerComponent';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold'>Hey Tailwind CSS</h1>
      <Button>StatelessComponent</Button>
      <StatefulButton>StatefulButton</StatefulButton>
      <SideEffectButton>SideEffectButton</SideEffectButton>
      <UseMemoComponent></UseMemoComponent>
      <UseRefComponent></UseRefComponent>
      <br/>
      <ContextComponent/>
      <ReducerComponent/>
      <TodoReducerComponent/>
    </div>
  );
}

export default App;
