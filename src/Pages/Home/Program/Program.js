import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Rating from 'react-rating';

const Program = (props) => {
  const { name, title, price, img, star, description, Email, mobile } = props.program;
  console.log(props);





  return (
    <div>
            
            <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 355 }} xs={4} sm={4} md={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            image={img}
            alt="green iguana"
          />

          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
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

        <CardActions >
          <Link href={`/register`} >
            <Button sx={{ mx: "auto", width: 200}} size="small" color="primary">
              Enroll 
            </Button>
          </Link>

        </CardActions>


      </Card>
    </Grid>

    </div>
  );
};

export default Program;