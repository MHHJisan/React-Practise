import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Postcard } from './components'

function App() {


  return (
    <div className='post-grid'>
      <Postcard post={{
        title: "Hello World",
        description: "Lorem ispum",
        id: 1
      }} />
      <Postcard id={2} />
      <Postcard id={3} />
      <Postcard id={4} />
      <Postcard id={5} />
      <Postcard id={6} />
    </div>
  )
}

export default App
