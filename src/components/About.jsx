import React from 'react'
import Pages from './Pages';
import { useState, useEffect } from "react";
import { Grid, Switch } from "@mui/material";

const About = ({setSelectedNews}) =>{
    const [data, setData] = useState([]);
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8b1415110de2471d92d95f97d5c63760");
      const data = await res.json();
      setData(data.articles);
      console.log(data.articles);
    };
    paginationFunc();
  }, []);
    return(
        <>
        {data && data.length > 0 ? 
      <Grid container xs={4}>
    <Pages data={data} setSelectedNews={setSelectedNews}/>
     </Grid>
    : <p>Loading...</p>}
        </>
    )
}

export default About