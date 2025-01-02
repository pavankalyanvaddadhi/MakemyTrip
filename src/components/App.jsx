import React from 'react'
import CustomButton from './Common/CustomButton'
import Header from './Layouts/Header/Header'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Flights from './Pages/Flights/Flights'
import HomeStays from "./Pages/HomeStays/HomeStays"
import Hotels from './Pages/Hotels/Hotels'
import Trains from './Pages/Trains/Trains'
import Buses from './Pages/Buses/Buses'
import Cabs from './Pages/Cabs/Cabs'
import Insurence from './Pages/Insurence/Insurence'
import Forexcard from './Pages/Forexcard/Forexcard'
const App = () => {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/Flights" element={<Flights />} />
        <Route path="/HomeStays" element={<HomeStays/>} />
        <Route path="/Hotels" element={<Hotels/>} />
        <Route path="/Trains" element={<Trains/>} />
        <Route path="/Buses" element={<Buses/>} />
        <Route path="/Cabs" element={<Cabs/>} />
        <Route path="/Insurence" element={<Insurence/>} />
        <Route path="/Forexcard" element={<Forexcard/>} />
      </Routes>
    </Router>
  )
}

export default App
