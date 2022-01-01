import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Rating from 'react-rating';



const SingleService = (props) => {
  const { _id, name, title, price, img, star, description, Email, mobile } = props.services;
  console.log(props);
  return (
    <Grid item xs={4} sm={4} md={4}>
    <Card sx={{ maxWidth: 545 }} xs={4} sm={4} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ width: 'auto', height: '300px', margin: '0 auto' }}
          image={img}
          alt="green iguana"
        />

        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {title}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>

          <Typography sx={{ color: "#01579b" }}>
            <Rating
              initialRating={star}
              emptySymbol="far fa-star  "
              fullSymbol="fas fa-star "></Rating>

          </Typography>

        </CardContent>
      </CardActionArea>

      <CardActions  >
        <Link href={`/manageService/${_id}`} >
          <Button sx={{ mx: "auto", width: 200, bgcolor: "info" }} variant="outlined" endIcon={<SendIcon />} size="small" color="warning">
            Apply Now
          </Button>
        </Link>

      </CardActions>


    </Card>
  </Grid>

  );
};

export default SingleService;