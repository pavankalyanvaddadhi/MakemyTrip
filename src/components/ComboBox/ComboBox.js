import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import FlightSearchdata from '../Constants/Constants'

export default function ComboBox() {
    console.log("FlightSearchdata",FlightSearchdata)
  return (
    <Autocomplete
      disablePortal
      options={FlightSearchdata}
      sx={{width: 300}}
      renderInput={params => <TextField {...params} label="City" />}
    />
  )
}
