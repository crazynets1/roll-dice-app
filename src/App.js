//Import all dependencies and react-components here
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

//Creating react App component here
function App() {

  function generateRandomNums() {
    let numArray = []
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random()*6)+1
       numArray.push({value:randomNum, isHeld:false, id:nanoid()})
    }
    return numArray
  }

  function rollDice() {
    if(gameWon) {
      setDice(generateRandomNums())
    } else {
      setDice(oldDice => {
        return oldDice.map(die => {
          return die.isHeld ? die : {...die, value:Math.floor(Math.random()*6)+1}
        })
      })
    }
  }

  function holdDice(id) {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? {...die, isHeld:!die.isHeld} : die
      })
    })
  }

  const [dices, setDice] = React.useState(generateRandomNums())
  const diceElements = dices.map(diceObj => <Die hold={() => holdDice(diceObj.id)} isHeld={diceObj.isHeld} key={diceObj.id} value={diceObj.value}/>)
  const gameWon = dices.every(die => die.isHeld) && dices.every(die => die.value === dices[0].value)

  //This is what react App component/function should return
  return (
    <main>
      <div className="title">
        <h1>Roll Dice</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-btn">
        {gameWon ? "New Game" : "Roll"}
      </button>
       {gameWon && <Confetti/>}
    </main>
  )
}

//Export react App component
export default App