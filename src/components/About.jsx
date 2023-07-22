import React from 'react'
import Pages from './Pages';
import { useState, useEffect } from "react";
import { Grid, Switch } from "@mui/material";

const About = ({setSelectedNews}) =>{
    const [data, setData] = useState([]);
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
      const data = await res.json();
      setData(data.articles);
      console.log(data.articles);
    };
    paginationFunc();
  }, []);
    return(
        <>
        {data && data.length > 0 ? 
      <Grid container xs={12}>
    <Pages data={data} setSelectedNews={setSelectedNews}/>
     </Grid>
    : <p>Loading...</p>}
        </>
    )
}

export default About