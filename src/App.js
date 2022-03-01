import React from 'react'
import Navbar from './components/Navbar.js'
import Location from './components/Location.js'
import data from './data.js'

export default function App() {
  let locations = data.map(item => 
    <Location item = {item} />
  )

  return (
    <div>
      <Navbar />
      {locations}
    </div>
  );
}
