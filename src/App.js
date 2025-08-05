import React from "react"
import Die from "./Die"

function App() {

  function generateRandomNums() {
    let numArray = []
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random()*6)+1
       numArray.push(randomNum)
    }
    return numArray
  }

  function rollDices() {
    setDices(generateRandomNums())
  }

  const [dices, setDices] = React.useState(generateRandomNums())
  const diceElements = dices.map(dice => <Die value={dice}/>)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
       <button onClick={rollDices} className="roll-btn">Roll</button>
    </main>
  )
}

export default App