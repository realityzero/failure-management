import logo from './logo.svg';
import './App.css';
import Button from './components/StatelessComponent';
import StatefulButton from './components/StatefulComponent';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold'>Hey Tailwind CSS</h1>
      <Button>StatelessComponent</Button>
      <StatefulButton>StatefulButton</StatefulButton>
    </div>
  );
}

export default App;
