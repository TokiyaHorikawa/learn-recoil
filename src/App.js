import logo from './logo.svg';
import './App.css';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const countState = atom({
  key: 'test/count',
  default: 0
})
const countIdOddState = selector({
  key: 'test/count/isOdd',
  get: ({ get }) => {
    const count = get(countState)
    return count  % 2 !== 0
  },
})

function App() {
  // const [count, setCount] = useRecoilState(countState);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <body>
        <div>
          <ViewCount />
          <ViewIsOdd />
          <AddCount />
          {/* <button onClick={() => setCount((c) => c+1)}>add</button> */}
        </div>
      </body>
    </div>
  );
}

const ViewCount = () => {
  const count = useRecoilValue(countState);
  return <p>カウント: {count}</p>
}

const ViewIsOdd = () => {
  const isOdd = useRecoilValue(countIdOddState);
  return <p>{isOdd ? '奇数' : '奇数ではありません'}</p>
}

const AddCount = () => {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount((c) => c+1)}>add</button>
}

export default App;
