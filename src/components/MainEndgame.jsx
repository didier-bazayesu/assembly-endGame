import React from 'react'
import ListLanguages from './ListLanguages'
import { useState } from 'react'

function MainEndgame() {
  const [currentWord,setCurrentWord] = useState("react")

  const renderCurrentWord = currentWord.split('')
  .map((letter,index)=> <span key={index} className='h-10 w-10 bg-[#323232] text-[#767676] text-[1.5rem]'>{letter}</span>)
 
  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  const renderAlphabet = alphabets.split('').map((alphabet,index)=> <button key={index} className=' bg-amber-600 px-3 cursor-pointer text-center '>{alphabet}</button>)
  return (
    <div className='flex '>
     <main className='bg-[#262626] space-y-10 mx-auto px-20 py-10 h-full'>
        <header className='flex  flex-col justify-center items-center space-y-5 '>
            <h1 className='text-[#F9F4DA] text-[1.25rem] font-bold  '>Assembly: Endgame</h1>
            <p className='text-[#8E8E8E] text-[0.875rem] max-w-87.5'>Guess the word within 8 attempts to keep the 
            programming world safe from Assembly!</p>
        </header>
        <section className="bg-green-500 flex flex-col text-center rounded-sm max-w-fit px-30 mx-auto">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
        </section>

        <ListLanguages/>

        <div className='flex  text-center border-b border-solid border-[#F9F4DA] gap-0.5 max-w-fit mx-auto'>
          {renderCurrentWord}
        </div>

        <section className='flex text-[white] w-80 mx-auto  gap-2  flex-wrap '>
          {renderAlphabet}
        </section>

      </main>

    </div>
  )
}

export default MainEndgame