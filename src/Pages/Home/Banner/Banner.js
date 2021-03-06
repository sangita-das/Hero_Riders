import React from 'react';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';
import banner1 from '../../../images/banner/banner3.jpg';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from 'react-reveal/Slide';


const bannerBg = {
  background: `url(${banner1})`,

}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 500
}

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6}>
          <Box>

          <Fade left>
          <Typography variant="h3" sx={{ color: 'yellow', fontWeight: 500, }}>
              "Joy and Have fun";
              <hr />
             Earn. Connect. && Contribute to Your Society<br />
              -Trusted services in all world
            </Typography>
        </Fade>
          

            <Fade left>
            <Typography variant="h6" sx={{ my: 3, fontSize: 16, fontWeight: 600, color: 'white' }}>
              LIFE IS A PLAYGROUND, WE SHOULD ALL TRY AGAIN. KINGFISHER PARK CROWING, <br />  -Partner with us drive your own livelihood and more..

            </Typography>
        </Fade>

        <Slide bottom>
        <Button variant="contained" style={{ backgroundColor: 'red' }}>Sign Up Now</Button>
        </Slide>

           
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Banner;