import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

// import type { RootState } from './store/store'
import Home from './views/home';
import Counter from './views/Counter'

function App() {
  // const count = useSelector((state : RootState) => state.appData.counter);
  // const dispatch = useDispatch()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
