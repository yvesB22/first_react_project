import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "./Greeting.jsx";
import FavoriteFood from './FavoriteFood.jsx';

function App() {
  const [count, setCount] = useState(0)
  let listOfFood = ["Pasta", "Fruits", "Meat", "Fries"]

  return (
    <>
      <div>
        <h1>
          Hello World !
        </h1>
      </div>
      <p>
          <Greeting/>
      </p>
      <p>
          <FavoriteFood listFood={listOfFood}/>
      </p>
    </>
  )
}
export default App
