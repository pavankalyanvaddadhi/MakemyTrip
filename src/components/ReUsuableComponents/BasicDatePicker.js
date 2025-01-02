import * as React from 'react'
import {DemoContainer} from '@mui/x-date-pickers/internals/demo'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'

export default function BasicDatePicker({label,updatecomboBoxvalue}) {
  const handlesearch = event => {
    updatecomboBoxvalue(event.$d)
    console.log("received dateupdate",event.$d)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} onChange={handlesearch} />
      </DemoContainer>
    </LocalizationProvider>
  )
}
