
import { makeStyles } from "@material-ui/core/styles"
import React from 'react'
import { Backdrop, Container, Paper } from "@material-ui/core";
import "./Home.css"
import Image from "../../assets/street.jpg"


const styles = {
  paperContainer : {
    // width: 1920,
    // height: 930,
    // backgroundPosition: "center",
    // backgroundImage:`url(${Image})`
    // background: rgba("121","90","30")
  }
}


export default function Home() {
  let welcome = ["Welcome One, and Welcome All", "Do or Do not, there is no try", "Goodnight, and Good luck", "Holy rusted metals, Batman", "From Food to Clothes", "Hey there good looking", "Use the Force", "The Price is Right", "We Love Ukraine"]

  let random = welcome[Math.floor(Math.random() * welcome.length-1)]
  return (
  
  <Paper className="background">
    <h1>Reactive</h1>
    <p className="greeting">{random}</p>
  </Paper>
 
  
  )
}
