import { TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:"100px"}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary'  label='BLOG NAME' ></TextField>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary'  label='DESCRIPTION' ></TextField>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary'  label='AUTHOR NAME' ></TextField>
    <br/>
    <br/>
    <button variant='outlined'  >ADD</button>
        

    </div>
  )
}

export default Add