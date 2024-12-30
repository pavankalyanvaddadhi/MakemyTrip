import React from 'react'
import CustomButton from '../../Common/CustomButton'

import { useState } from 'react';
import ComboBox from '../../ComboBox/ComboBox';

const Flights = () => {
  const [usersearchcredentials,updateusersearchcredentials]=useState({
    Departure: '',
    Return: ''
})

function handlesearch(eventobj){
  const name=eventobj.target.name
  const value=eventobj.target.value
 
  updateusersearchcredentials(previousstatevalue=>({
    ...previousstatevalue,[name]:value
  }))
}
  function handleoutput(){
    console.log(usersearchcredentials,"usersearchcredentials")
  }

  return (
    <div className="container card mt-5">
      <div className="d-flex justify-content-start gap-4 mt-3">
      
        <CustomButton text1="One Way" variant="contained"   />
        <CustomButton text1="Round Trip" variant="contained" />
        <CustomButton text1="Multi City" variant="contained" />
      </div>

      <div className="container my-2 d-flex justify-content-evenly border mt-3">
      <div>
       {ComboBox()}
      </div>
      <div>
       {ComboBox()}
      </div>
       
        <div>
          Departure
          <input type="date" onChange={handlesearch} name="Departure" />
        </div>
        <div>
        Return
          <input type="date"  onChange={handlesearch} name="Return"></input>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button type='button'class="btn btn-primary" onClick={handleoutput}>Search</button>
       
      

      </div>


    
      
    </div>
  )
}

export default Flights
