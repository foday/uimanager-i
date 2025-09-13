import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Header from "../components/header"
import Home from "../components/home";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"



const IndexPage = () => (
  <>
 <Box sx={{display: 'flex', justifyContent: 'center', marginTop: "8px"}}>
  <Container maxWidth="md">
    <Header/>
    <Home/>
  </Container>
 </Box>
  
  </>)
  

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
