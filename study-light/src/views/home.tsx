import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter } from '../store/appDataSlice'
import { Link } from 'react-router-dom'

import type { RootState } from '../store/store'

function Home() {
  const count = useSelector((state : RootState) => state.appData.counter);
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <p>Home</p>
        <Link to="/">Go Home</Link>
        <p>Counter component</p>
        <Link to="/counter">Go Counter</Link>
        <p></p>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCounter())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
