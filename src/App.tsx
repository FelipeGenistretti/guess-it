import { useState } from 'react'
import { useEffect } from 'react'

import { WORDS } from './utils/words'
import type { Challenge } from './utils/words'
import './App.css'
import { Header } from './components/Header'
import { Tip } from './components/Header/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed } from './components/LettersUsed'
import type { LettersUsedProps } from './components/LettersUsed'

function App() {

  const [letter, setLetter] = useState("")
  const [lettersUsed, setLetterUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [score, setScore] = useState(0)

  const ATTEMPTS_MAX = 5

  function handleRestartGame(){
    const isConfirmed = window.confirm("Deseja reiniciar o jogo mesmo?")

    if(isConfirmed){
      startGame()
    }
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)
    setScore(0) 
    setLetter("")
    setLetterUsed([])
    
  }

  function handleConfirm(){
    if(!challenge){
      return
    }

    if(!letter.trim()){
      return alert("Digite uma letra")
    }
    const value = letter.toLocaleUpperCase()

    const regex = /^[A-Z]$/
    if(!regex.test(value)){
      return alert("Apenas letras são permitidas")
    }

    const exists = lettersUsed.find((used)=>used.value.toLocaleUpperCase() === value)

    if(exists) {
      setLetter("")
      return alert(`Você já utilizou a letra ${letter}`)
    }

    const hits = challenge.word.toLocaleUpperCase().split("").filter((char)=> char === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLetterUsed((prevState)=> [...prevState, {value, correct}])
    setScore(currentScore)

    setLetter("")

  }

  function endGame(message:string){
    alert(message)
    startGame()
  }

  useEffect(()=>{
    startGame()
  }, [])

  useEffect(()=>{
    if(!challenge){
      return
    }
    setTimeout(()=>{
      if(score === challenge.word.length){
        return endGame("Parabens vc descobriu a palavra")
      }
      const attempt_limit = challenge.word.length + ATTEMPTS_MAX
      if(lettersUsed.length === attempt_limit){
        return endGame("Que pena! vc usou todas as tentativas")
      }
    }, 200)
  },[score, lettersUsed.length])

  if (!challenge) return null



  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <main className='flex flex-col justify-center bg-[#ffffff] p-5 rounded h-auto max-w-[600px] mx-auto'>
        <Header current={lettersUsed.length} max={challenge.word.length + ATTEMPTS_MAX} onRestart={handleRestartGame}/>
        <Tip tip={challenge.tip}/>

        <div className='flex flex-wrap justify-center gap-2 mt-5 p-4 max-w-[600px] mx-auto'>
          {challenge.word.split("").map((letter, index)=>{
            const letterUsed = lettersUsed.find((used)=>used.value.toLocaleUpperCase() === letter.toLocaleUpperCase())
            return(
              <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correct" : "default"}/>
            )})}
        </div>

        <h4>Palpite</h4>
        <div className='space-x-4'>
          <Input autoFocus maxLength={1} placeholder='?' value={letter} onChange={(e)=>setLetter(e.target.value)}/>
          <Button title='confirmar' onClick={handleConfirm}/>
        </div>

        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
  )
}

export default App
