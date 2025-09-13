import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import { CardContent } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import Grid from '@mui/material'
import Box from '@mui/material'
import Container from '@mui/material'

const cards = (props) => {
    // const icons = props.icons
    const title = props.title;
    const subheader = props.subheader;

  return (
    <div>
        <Card sx={{maxWidth: 345}}>
            <CardHeader 
            // icons={props.icons}
            title={props.title}
            subheader={props.subheader}
            />

        </Card>
        
    </div>
  )
}

export default cards