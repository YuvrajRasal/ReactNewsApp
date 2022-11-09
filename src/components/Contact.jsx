import React from "react";
import {
    Grid,
    CardMedia,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

const Contact = ({ selectedNews }) => {
    return (
        <Card sx={{ maxWidth: 345 }} key={selectedNews.publishedAt} >
            <CardMedia
                component="img"
                height="140"
                image={selectedNews.urlToImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {selectedNews.author}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    {selectedNews.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {
                        selectedNews.description.length < 40
                            ? `${selectedNews.description}`
                            : `${selectedNews.description.substring(0, 80)}...` //why did we need 80 (suvh a large no.)
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <a href={selectedNews.url}>Learn More</a>
            </CardActions>
        </Card>
    );
};
export default Contact;