import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./../hooks/pagination";
import {
    Grid,
    CardMedia,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";

const styles = {

    //   margin: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    //   border:"2px solid blue"

  };

const Pages = ({ data, setSelectedNews }) => {
    const [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex, //eslint-disable-line
        displayPage,
    ] = usePagination(9, data.length);

    const navigate = useNavigate();
    return (
        <>
        <div >
        <Typography 
        sx={{
            display:"flex",
            justifyContent:"center",
            fontSize:"40px"
            }}
        >User Posts</Typography>

        <Grid container spacing={2.5} sx={{pr:"20px" , pl:"20px"}}>
            {(() => {
                const displayPosts = [];
                for (let i = startPageIndex; i <= endPageIndex; i++) {
                    displayPosts.push(
                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{display:"flex"}}>
                        <Card sx={{ maxWidth: 445 }} key={data[i].publishedAt} style={styles}>
                            
                            <CardContent >
                            <CardMedia
                                component="img"
                                height="180"
                                image={data[i].urlToImage}
                                alt="green iguana"
                                sx={{mb:3}}
                            />
                                <Typography
                                    gutterBottom
                                    // variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize:"23px",
                                        fontWeight:500,
                                        fontFamily:"poppins"
                                    }}
                                >
                                    {data[i].title}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    // variant="h7"
                                    component="div"
                                    sx={{
                                        fontSize:"18px",
                                        fontWeight:400,
                                        fontFamily:"poppins"
                                    }}
                                >
                                    {data[i].title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {
                                       data[i]?.description?.length < 40
                                       ? `${data[i]?.description ?? 'No description'}`
                                       : `${(data[i]?.description ?? 'No description').substring(0, 80)}...`
                                      //why did we need 80 (suvh a large no.)
                                              
                                    }
                                </Typography>
                            </CardContent>
                            <CardActions
                            sx={{
                                display:"flex",
                                justifyContent:"space-between"
                                }}>
                                <Button
                                    size="small"
                                    onClick={() => {
                                        setSelectedNews(data[i]);
                                        navigate(
                                            `/contact/${data[i].publishedAt}`
                                        );
                                    }}
                                >
                                    View
                                </Button>
                                <a href={data[i].url}> Learn More</a>
                            </CardActions>
                        </Card>
                        </Grid>
                    );
                }
                return displayPosts;
            })()}
        </Grid>
        <Pagination
                color="primary"
                count={totalPages}
                onChange={(event, value) => displayPage(value)}
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    margin:"40px 0px"
                    }}
            />
        </div>
        </>
    );
};

export default Pages;