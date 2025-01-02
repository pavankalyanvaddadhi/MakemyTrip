import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import FlightSearchdata from '../Constants/Constants'

export default function ComboBox({label,updatecomboBoxvalue}) {
  const handlechange=(e)=>{
    updatecomboBoxvalue(e.target.textContent)
    return console.log("event",e.target.textContent)
  }
  return (
    <Autocomplete
      disablePortal
      onChange={handlechange}
      options={FlightSearchdata}
      getOptionLabel={(option) => option.Cityname}
      sx={{width: 300}}
      renderInput={params => <TextField {...params} label={label} />}
    />
  )
}
