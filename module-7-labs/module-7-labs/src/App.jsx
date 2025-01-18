import React from 'react'
import { useState } from 'react'
import './App.css'
import { UserProvider } from "./context/userContext"
import AppRoutes from './routes/appRoutes'
import NavBar from './components/NavBar/navBar'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './components/Themes/theme'
import { MoodProvider } from './context/emojiContext'

function App() {

  return (
    <>
       <UserProvider>
      <ThemeProvider theme={tealTheme}>
       <MoodProvider>
          
     
        <NavBar>
          </NavBar>
           
            <AppRoutes></AppRoutes>
          </MoodProvider>
           </ThemeProvider>
          </UserProvider>
  
        
      
    </>
  )
}

export default App
