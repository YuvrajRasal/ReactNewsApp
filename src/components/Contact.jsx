import React from "react";
import {
    Grid,
    CardMedia,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Paper,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import newspaperNew from '../images/newspaper.png'
const styles = {

    //   margin: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    //   border:"2px solid blue"

  };

const Contact = ({ selectedNews }) => {
    const navigate = useNavigate();

    return (
        <>
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            // height: "100vh",
            // image:{newspaperNew},
            backgroundColor:"beige"
        }}>
        <Paper elevation={2} sx={{m:"20px 20px"}}>
        <Card key={selectedNews.publishedAt} sx={{maxWidth:"900px" }} style={styles}>
            <CardMedia
               component="img"
               height="380"
               image={selectedNews.urlToImage}
               alt="green iguana"
               sx={{mb:0}}
            />
            <CardContent>
                <Typography
                 gutterBottom 
                 component="div"
                sx={{
                fontSize:"28px",
                fontWeight:600,
                fontFamily:"poppins",
                textAlign:"center"
                    }}
                 >
                    {selectedNews.title}
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{mb:2}}>
                    {  
                      `${selectedNews.description ?? 'No description'}`
                    }
                    
                </Typography>
                <Typography
                 gutterBottom 
                 component="div"
                sx={{
                fontSize:"18px",
                fontWeight:400,
                fontFamily:"poppins"
                    }}
                 >
                    {selectedNews.content}
                </Typography>
                <Box 
                 sx={{
                    display:"flex",
                    justifyContent:"space-between"
                    }}>
                <Typography
                 gutterBottom 
                 component="div"
                sx={{
                    display:"flex"
,                fontSize:"15px",
                fontWeight:350,
                fontFamily:"poppins",
                justifyContent:"flex-start",
                alignItems:"center"

                    }}
                 >
                    Source: {selectedNews.source.name}
                </Typography>
                <Typography
                 gutterBottom 
                 component="div"
                sx={{
                    // display:"flex",
                    justifyContent:"flex-end",
                    fontSize:"15px",
                    fontWeight:400,
                    fontFamily:"poppins",
                    textAlign:"center",

                    }}
                 >
                    ~{selectedNews.author}
                </Typography>
                </Box>

                
            </CardContent>
            <CardActions
             sx={{
                display:"flex",
                justifyContent:"space-between"
                }}>
                    <Button onClick={() => navigate(-1)}>Go back</Button>
                <a href={selectedNews.url}>Learn More</a>
                
            </CardActions>
        </Card>
        </Paper>
        </Box>
        </>
    );
};
export default Contact;