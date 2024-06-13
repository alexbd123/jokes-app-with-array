import './App.css'
import Joke from "./components/Joke.jsx"
import jokesData from "./jokesData.js"

function App() {
  
  const jokeElements = jokesData.map(joke =>{
    return <Joke
      setup={joke.setup}
      punchline={joke.punchline}
     />
  })

  return (
    <>
      {jokeElements}
    </>
  )
}

export default App
