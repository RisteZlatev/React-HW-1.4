import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicCounter from './components/DynamicCounter'
import React from 'react'
import RandomUserFetcher from './components/RandomUserFetcher'
import CatGallery from './components/Exercise 3/CatGallery'

function App() {

  return (
    <div>
      <DynamicCounter/>
      <RandomUserFetcher/>
      <CatGallery/>
    </div>
  )
}

export default App
