

import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/Bitcoin/bitCoinRates'
import { MoodProvider } from './context/emojiContext'
import MoodDisplay from './components/EmojiDisplay/emojidisplay'
import MoodChanger from './components/Emoji/emoji'
import { UserProvider } from "./context/userContext"
import AppRoutes from './routes/appRoutes'
import NavBar from './components/NavBar/navBar'

function App() {
  

  return (
    <>
      <UserProvider>
       
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
      
      </UserProvider>
      
    </>
  )
}

export default App
