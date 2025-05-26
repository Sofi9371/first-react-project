import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <div 
    style={{
      maxWidthWidth: "500px",
      marginLeft: "10rem",
      padding: "20px",
      boxShadow: "0 7px 10px rgba(226, 223, 219, 0.3)",
      borderRadius: "6px",
      border: "2px solid white",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}
  >
    
    <h2 style={{ textAlign: "center", color: "lightBlue" }}>my info</h2>
    <div style={{ marginBottom: "15px" }}>
  <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    style={{
      width: "100%",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box"
    }}
  />
</div>
  </div>
  )
}

export default App
