import React from "react";
// import {GitHubIcon} from '@mui/icons-material';
// import { Paper } from '@mui/material';
import { Card, CardContent } from '@material-ui/core';


  

  
const PageM = () => {

  return (
      <div className="card-wrapper">
      <div className ="card-container1">
    <Card  >
        <CardContent>
    <div className="about-container">
       
      <h5>Created by:</h5>
       <h4>Kelsey Smith</h4>
   
   
    </div>
    </CardContent>
    </Card>
    </div>
    <div className ="card-container2">
    <Card  >
        <CardContent>
    <div className="about-container">
       
      <h5>Created by:</h5>
       <h4>Kelsey Smith</h4>
  
   
    </div>
    </CardContent>
    </Card>
    </div>
    <div className ="card-container3">
    <Card  >
        <CardContent>
    <div className="about-container">
       
      <h5>Created by:</h5>
       <h4>Kelsey Smith</h4>
   
   
    </div>
    </CardContent>
    </Card>
    </div>
    </div>
  );
};

export default PageM;
