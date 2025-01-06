import React from 'react'
import CustomButton from '../../Common/CustomButton'
import Bus from 'assets/bus.svg'
import Cab from 'assets/cab.svg'
import Currency from 'assets/currency.svg'

import Home from 'assets/home.svg'
import Hotel from 'assets/hotel.svg'
import Insurenceicon from 'assets/insurance-hand.svg'
import Train from 'assets/train.svg'
import {SliderMarkLabel, Typography} from '@mui/material'

import flighticon from 'assets/Flighticon.svg'

import { useNavigate } from 'react-router-dom'
const Header = () => {

const Navigate=useNavigate();
const handleFlight = () => {
  Navigate('./Flights'); // Use navigate function
}

const handleHotel = () => {
  Navigate('./Hotels'); // Use navigate function
}

const handleHomestays = () => {
  Navigate('./HomeStays'); // Use navigate function
}
const handleTrains = () => {
  Navigate('./Trains'); // Use navigate function
}
const handleCabs = () => {
  Navigate('./Cabs'); // Use navigate function
}
const handleInsurence = () => {
  Navigate('./Insurence'); // Use navigate function
}
const handleBuses = () => {
  Navigate('./Buses'); // Use navigate function
}
const handleForex = () => {
  Navigate('./ForexCard'); // Use navigate function
}


  return (
    <>
      <div className="container  " style={{display: 'flex', paddingTop: '10px'}}>
        <div style={{width: '18%'}}>
          <img
            src={
              'https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png '
            }
            style={{width: '100%'}}
          />
        </div>
        <div className="container d-flex " style={{marginLeft: '300px'}}>
          <CustomButton
            text1="List Your Property"
            text2="Grow Your Business"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
          <CustomButton
            text1="Introducing myBiz"
            text2="Business Travel Solution"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
          <CustomButton
            text1="My Trips"
            text2="Manage your bookings"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
          <CustomButton
            text1="Login or Create Account"
            variant="contained"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
          <CustomButton
            text1="IN | ENG"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
          <CustomButton
            text1="INR"
            className="d-flex flex-column text-light"
            fontsize1="13px"
            fontsize2="8px"
          />
        </div>
      </div>
      <div
        className="container d-flex flex-row mt-5 bg-white justify-content-evenly py-3" 
        style={{borderRadius: '10px', width: '60%'}}>
        <div onClick={handleFlight}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={flighticon} width="30px" />
          </div>

          <p>Flights</p>
        </div>
        <div onClick={handleHotel}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Hotel} width="30px" />
          </div>

          <p>Hotels</p>
        </div>
        <div onClick={handleHomestays}>
          <div style={{display: 'flex flex-colomn'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img src={Home} width="30px" />
            </div>

            <Typography>Homestays</Typography>
            <Typography>&Villas</Typography>
          </div>
        </div>
        <div onClick={handleTrains}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Train} width="30px" />
          </div>

          <p>Trains</p>
        </div>
        <div onClick={handleBuses}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Bus} width="30px" />
          </div>
          <p>Buses</p>
        </div>
        <div onClick={handleCabs}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Cab} width="30px" />
          </div>
          <p>Cabs</p>
        </div>

        <div onClick={handleForex}>
          <div style={{display: 'flex flex-colomn'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img src={Currency} width="30px" />
            </div>

            <Typography>Forex Card</Typography>
            <Typography>Currency</Typography>
          </div>
        </div>
        <div onClick={handleInsurence}>
          <div style={{display: 'flex flex-colomn'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img src={Insurenceicon} width="30px" />
            </div>

            <p1>Travel</p1>
            <p>Insurance</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Header
