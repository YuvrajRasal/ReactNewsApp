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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Pages = ({ data, setSelectedNews }) => {
    const [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex, //eslint-disable-line
        displayPage,
    ] = usePagination(5, data.length);

    const navigate = useNavigate();
    return (
        // <Grid item xs={6} key={"publishedAt"}>
        <div style={{ marginLeft: "20px" }}>
            <h1>User Posts</h1>
            {(() => {
                const displayPosts = [];
                for (let i = startPageIndex; i <= endPageIndex; i++) {
                    displayPosts.push(
                        //   <Grid item xs={3} key={key}>
                        <Card sx={{ maxWidth: 345 }} key={data[i].publishedAt}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data[i].urlToImage}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {data[i].author}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h7"
                                    component="div"
                                >
                                    {data[i].title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {
                                        data[i].description.length < 40
                                            ? `${data[i].description}`
                                            : `${data[i].description.substring(
                                                  0,
                                                  80
                                              )}...` //why did we need 80 (suvh a large no.)
                                    }
                                </Typography>
                            </CardContent>
                            <CardActions>
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
                    );
                }
                return displayPosts;
            })()}
            <Pagination
                color="primary"
                count={totalPages}
                onChange={(event, value) => displayPage(value)}
            />
        </div>
        // </Grid>
    );
};

export default Pages;