import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header/Header'
import Shop from './componets/shop/Shop'
import BasicExample from './componets/Header/Nevbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BasicExample></BasicExample> */}
      <Header></Header>
      <Shop></Shop>


    </div>
  )
}

export default App
