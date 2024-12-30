import React from 'react'
import Button from '@mui/material/Button'
import {Typography} from '@mui/material'

const CustomButton = ({
  variant,
  text1,
  text2,
  color,
  className,
  fontsize1,
  fontsize2,
  size,
}) => {
  return (
    <div>
      <Button
        variant={variant}
        color={color}
        size={size}
        className={className}
        sx={{marginLeft: '2px', textAlign: 'start'}}>
        <Typography fontSize={fontsize1} size={size}>
          {text1}
        </Typography>
        <Typography fontSize={fontsize2}>{text2}</Typography>
      </Button>
    </div>
  )
}

export default CustomButton
