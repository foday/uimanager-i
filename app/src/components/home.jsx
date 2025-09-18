import React from 'react'
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Cards from "./mycards";
import LoupeIcon from '@mui/icons-material/Loupe';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
// import { CardActionArea, CardContent, Grid, Icon } from '@mui/material';


const home = () => {
  return (
    <div>
        {/* <Typography variant="h4" component="h1" gutterBottom>Extensions List</Typography>
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>All</Button>
        <Button variant='contained' color='secondary' style={{ marginBottom: '20px' }}>Active</Button>
        <Button variant='contained' color='success' style={{ marginBottom: '20px' }}>Inactive</Button> */}
        <Grid container spacing={3} alignItems={"stretch"}>
          {/* Card 1 -------------------------------------------- */}
          <Grid size={4} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Cards
              sx={{height: "100%"}}
              title="DevLens" 
              subheader="Quickly inspect page layouts and visualize element boundaries"
              Icons={<LoupeIcon/>}
              // <Cards Icon={LoupeIcon} />
          //  icons="LoupeIcon"
            >
                
              
            </Cards>
          </Grid>

          {/* Card 2 -------------------------------------------- */}
          <Grid size={4}>
            <Cards 
            sx={{height: "100%"}}
            title="StyleSpy" 
              subheader="Instantly analyze and copy CSS from any webpage element"
          Icons={<LoupeIcon/>}
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