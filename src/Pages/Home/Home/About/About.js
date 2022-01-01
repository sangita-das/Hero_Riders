import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import about from '../../../../images/img1.jpg';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>

          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Flip left>
          <Typography variant="h2" gutterBottom sx={{ color: "primary" }}>
              About US
            </Typography>
        </Flip>
            
            <Divider />
            <Divider />

            <Slide bottom>
            <Typography variant="h6" gutterBottom>
              “ To ensure riders have fun with vehicles.”
            </Typography>
        </Slide>

            
        <Slide bottom>
        <Typography variant="body1" gutterBottom>
              The History:
              “We started Hero riders in 2021, with just on horse called Bonny Lass. I bought Bonny from Beccles Market with my savings a little help from my dad. I rode her back to Pakefield with just a rope halter and no saddle; something that we just wouldn’t dream of doing nowadays. But in those days the roads were much quieter and ‘Health and Safety’ hadn’t been invented.

During the mid sixties a covered school was constructed at the yard (the first in East Anglia). This helped to ensure that we could hold lessons whatever the weather. During the time rather rickety, stables were replaced by the modern, wooden stables blocks that stand today.
Pay attention to the weather. If it is winter keep an eye on the temperature and forecast, you don’t want to get caught driving on black ice, slush or snow.  In the Spring and Summer, there is fog, flooding rains, intense thunderstorms, tornados, and hurricanes. If you must drive in adverse conditions, do so with great caution, or put off the driving until the weather improves.

            </Typography>
        </Slide>

            
        <Slide bottom>
        <Typography variant="h6" gutterBottom>

Take your driving lessons with us. We accept all students. It is as easy as 1, 2, 3. Select the town of pick up, then book a lesson. DONE Make sure you visit our driving page to learn more about our lessons.
</Typography>
        </Slide>
            
        <Slide right>
         
        </Slide>  


              
        <Slide right>
        <Grid container spacing={2}>
<Grid item sx={{ mt: 5 }} xs={12} md={6}>
<Button variant="contained" style={{ backgroundColor: 'primary' }}>Join As A Lerner</Button>



</Grid>
<Grid item sx={{ mt: 5 }} xs={12} md={6}>
<Button variant="contained" style={{ backgroundColor: 'primary' }}>Join As A Rider</Button>
</Grid>
</Grid>
        </Slide>



          </Grid>
          

          <Grid item xs={12} md={6} sx={{ mt: 12 }} >
            <img style={{ width: '100%', }} src={about} alt="" />
          </Grid>

        </Grid>
      </Container>

    </div>
  );
};

export default About;