import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tip } from './components/Header/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed } from './components/LettersUsed'

function App() {

  function handleRestartGame(){
    alert("reinciar o jogo")
  }


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <main className='flex flex-col justify-center bg-[#ffffff] p-5 rounded h-auto max-w-[600px] mx-auto'>
        <Header current={5} max={10} onRestart={handleRestartGame}/>
        <Tip tip="Uma das linguagens de programação mais utilizadas"/>

        <div className='flex flex-wrap justify-center gap-2 mt-5 p-4 max-w-[600px] mx-auto'>
          <Letter value='r'/>
          <Letter value='e'/>
          <Letter value='a'/>
          <Letter value='c'/>
          <Letter value='t'/>
        </div>

        <h4>Palpite</h4>
        <div className='space-x-4'>
          <Input autoFocus maxLength={1} placeholder='?'/>
          <Button title='confirmar'/>
        </div>

        <LettersUsed/>
      </main>
    </div>
  )
}

export default App
