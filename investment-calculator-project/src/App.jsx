import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1000,
      expectedReturn: 5,
      duration: 10
  });

  function handleUserInput(inputId, InputValue) {
    
      setUserInput(prevUserInput => {
          return {...prevUserInput,
              [inputId]: +InputValue
          }
      });
  }

  const inputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput onChangeUserInput={handleUserInput} userInput={userInput}/>
      {!inputValid && <p className="center">Please enter a valid investment duration.</p>}
      {inputValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
