import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

const myInput = styled.input`
  padding: 9px;
  font-size: 18px;
  border-width: 0px;
  border-color: #231d1d;
  background-color: #ffffff;
  color: #080707;
  border-style: solid;
  border-radius: 18px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 2px 3px 6px rgba(137, 131, 131, 0.51);
  &focus {
    outline: none;
  }
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App