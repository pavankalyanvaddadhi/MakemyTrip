import React from 'react'
import CustomButton from '../../Common/CustomButton'
import axios from 'axios'
import {useState} from 'react'
import ComboBox from '../../ComboBox/ComboBox'
import BasicDatePicker from '../../ReUsuableComponents/BasicDatePicker'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {FlightService} from '../../Service/API'
import {responsedata} from '../../Service/API'

const Flights = () => {
  const [responsedata, setresponsedata] = useState('')
  const FlightService = async () => {
    const url = await axios.post(
      `https://api.escuelajs.co/api/v1/products/`,
      usersearchcredentials,
    )
    const res = url.data
    console.log(res)
  }

  // const FlightService = ()=> async usersearchcredentials => {

  //     const url = await axios.post(
  //       `https://api.escuelajs.co/api/v1/products/`,
  //       Dynamicdata,
  //     )
  //     const res = url.data
  //     console.log(res.description, 'Response')
  //     setresponsedata(res)

  //   },

  const [usersearchcredentials, updateusersearchcredentials] = useState({
    // from: '',
    // To: '',
    // Departure: '',
    // Return: '',
    title: 'Hyderabad',
    price: 10,
    description: 'Vijayawada',
    categoryId: 1,
    images: ['https://placeimg.com/640/480/any'],
  })
  // const updatecomboBoxvalue = value => {
  //   updateusersearchcredentials(value)
  //   console.log('receved from child combo', value)
  // }
  function handlesearch(name, value) {
    updateusersearchcredentials(previousstatevalue => ({
      ...previousstatevalue,
      [name]: value,
    }))
  }
  const handleoutput = async () => {
    const url = await axios.post(
      `https://api.escuelajs.co/api/v1/products/`,
      usersearchcredentials,
    )
    const res = url.data
    console.log(res, 'response')
    setresponsedata(res)
  }

  return (
    <div className="container card  ">
      <div className="container fluid mt-5">
        <div className="d-flex justify-content-start gap-4 mt-3">
          <CustomButton text1="One Way" variant="contained" />
          <CustomButton text1="Round Trip" variant="contained" />
          <CustomButton text1="Multi City" variant="contained" />
        </div>
        {/* 
        <div className="container my-2 d-flex justify-content-evenly mt-3">
          <div>
            <ComboBox
              updatecomboBoxvalue={value => handlesearch('from', value)}
              label="From"
              onChange={handlesearch}
            />
          </div>
          <div>
            <ComboBox
              updatecomboBoxvalue={value => handlesearch('To', value)}
              label="To"
            />
          </div>

          <div>
            <BasicDatePicker
              label="Departure"
              updatecomboBoxvalue={value => handlesearch('Departure', value)}
            />
          </div>
          <div>
            <BasicDatePicker
              label="Return"
              updatecomboBoxvalue={value => handlesearch('Return', value)}
            />
          </div>
        </div>
       */}

        <div className="container my-2 d-flex justify-content-evenly mt-3">
          <div>
            <ComboBox
              updatecomboBoxvalue={value => handlesearch('title', value)}
              label="title"
              onChange={handlesearch}
            />
          </div>

          <div>
            <ComboBox
              updatecomboBoxvalue={value => handlesearch('description', value)}
              label="description"
              onChange={handlesearch}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-primary" onClick={handleoutput}>
            Search
          </button>
        </div>
        <div>{responsedata.title}</div>
        <div>{responsedata.description}</div>

        {/* <div>{res.description}</div> */}
      </div>
    </div>
  )
}

export default Flights
