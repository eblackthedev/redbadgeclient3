import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ReactDOM } from "react";

export default class PlantWishlist extends React.Component {
  render() {
    return (
      <div>
        <Typography>
          <h2>Plant Wishlist</h2>
        </Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Search For Plants"
            id="fullWidth"
            align="center"
          />
        </Box>

        <Card sx={{ width: 400, maxWidth: "100%" }}>
          <CardMedia
            component="img"
            height="140"
            image="http://source.unsplash.com/YAVctD4P7GU"
          />
          <CardContent>
            <Typography
              gutterBottom
              align="center"
              variant="h5"
              component="div"
            >
              Bird Of Paradise
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Add To Wishlist</Button>
            <Button size="small">Add To My List</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
