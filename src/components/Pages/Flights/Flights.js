import React from 'react'
import CustomButton from '../../Common/CustomButton'

import {useState} from 'react'
import ComboBox from '../../ComboBox/ComboBox'
import BasicDatePicker from '../../ReUsuableComponents/BasicDatePicker'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
const Flights = () => {
  const [usersearchcredentials, updateusersearchcredentials] = useState({
    from: '',
    To: '',
    Departure: '',
    Return: '',
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
  function handleoutput() {
    console.log(usersearchcredentials, 'usersearchcredentials')
  }

  return (
    <div className="container card ">
      <div className="container fluid mt-5">
        <div className="d-flex justify-content-start gap-4 mt-3">
          <CustomButton text1="One Way" variant="contained" />
          <CustomButton text1="Round Trip" variant="contained" />
          <CustomButton text1="Multi City" variant="contained" />
        </div>

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
            <BasicDatePicker label="Departure"  updatecomboBoxvalue={value => handlesearch('Departure', value)} />
          </div>
          <div>
            <BasicDatePicker label="Return" updatecomboBoxvalue={value => handlesearch('Return', value)}/>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-primary" onClick={handleoutput}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Flights
