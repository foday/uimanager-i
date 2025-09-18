import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import LoupeIcon from '@mui/icons-material/Loupe';

const cards = ({Icons, title, subheader}) => {
    
    // const icon = icon
    // const title = props.title;
    // const subheader = props.subheader;
    // const MyIcon = {{Icon}} => {};

  return (
    <div>
        <Card sx={{maxWidth: 345, height: "100%"}} >
          {Icons}
            
            {/* {Icons && <Icons/>} */}
            
            <CardHeader 
            title={title}
            subheader={subheader}
            />
            

        </Card>
        
    </div>
  )
}

export default cards