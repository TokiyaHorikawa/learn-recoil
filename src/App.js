import logo from './logo.svg';
import './App.css';
import { atom, useRecoilState } from 'recoil'

const countState = atom({
  key: 'test/count',
  default: 0
})

function App() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <body>
        <div>
          <p>カウント: {count}</p>
          <button onClick={() => setCount((c) => c+1)}>add</button>
        </div>
      </body>
    </div>
  );
}

export default App;
