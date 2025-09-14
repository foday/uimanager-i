import React from 'react'
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Cards from "./cards";
import LoupeIcon from '@mui/icons-material/Loupe';
import { CardContent, Grid } from '@mui/material';


const home = () => {
  return (
    <div>
        {/* <Typography variant="h4" component="h1" gutterBottom>Extensions List</Typography>
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>All</Button>
        <Button variant='contained' color='secondary' style={{ marginBottom: '20px' }}>Active</Button>
        <Button variant='contained' color='success' style={{ marginBottom: '20px' }}>Inactive</Button> */}
        <Grid container spacing={3}>
          <Grid size={4}>
            <Cards
              title="DevLens" 
              subheader="Quickly inspect page layouts and visualize element boundaries"
          //  icons={LoupeIcon}
            >
              <CardContent>
                <LoupeIcon/>
              </CardContent>
            </Cards>
          </Grid>
          <Grid size={4}>
            <Cards title="StyleSpy" 
              subheader="Instantly analyze and copy CSS from any webpage element"
          // icons={LoupeIcon}
        />
          </Grid>
          <Grid size={4}>
            <Cards title="SpeedBoost" 
              subheader="Optimizes browser resource usage to accelerate page loading."
          // icons={LoupeIcon}
        />
          </Grid>

          <Grid size={4}>
            <Cards title="JSONWizard" 
              subheader="Formats, validates, and prettifies JSON responses in-browser."
           // icons={LoupeIcon}
        /></Grid>
          
          <Grid size={4}>
            <Cards title="TabMaster Pro" 
              subheader="Organizes browser tabs into groups and sessions."
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="ViewportBuddy" 
              subheader="Simulates various screen resolutions directly within the browser."
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="Markup Notes" 
              subheader="Enables annotation and notes directly onto webpages for collaborative debugging"
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="GridGuides" 
              subheader="Overlay customizable grids and alignment guides on any webpage"
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="Palette Picker" 
              subheader="Instantly extracts color palettes from any webpage"
           // icons={LoupeIcon}
        /></Grid>
          
          <Grid size={4}>
            <Cards title="LinkChecker" 
              subheader="Scans and highlights broken links on any page"
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="DOM Snapshot" 
              subheader="Capture and export DOM structures quickly"
           // icons={LoupeIcon}
        /></Grid>

<Grid size={4}>
            <Cards title="ConsolePlus" 
              subheader="Enhanced developer console with advanced filtering and logging."
           // icons={LoupeIcon}
        /></Grid>
          


        </Grid>
       
    </div>
  )
}

export default home