import React from 'react'
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Cards from "./cards";
import LoupeIcon from '@mui/icons-material/Loupe';


const home = () => {
  return (
    <div>
        {/* <Typography variant="h4" component="h1" gutterBottom>Extensions List</Typography>
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>All</Button>
        <Button variant='contained' color='secondary' style={{ marginBottom: '20px' }}>Active</Button>
        <Button variant='contained' color='success' style={{ marginBottom: '20px' }}>Inactive</Button> */}
        <Cards title="DevLens" 
        subheader="Quickly inspect page layouts and visualize element boundaries"
        // icons={LoupeIcon}
        />
    </div>
  )
}

export default home