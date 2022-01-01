import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
// import SingleProduct from '../SingleProduct/SingleProduct';
import { Container } from '@mui/material';
import SingleService from '../SingleService/SingleService';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Container>
    <Flip right>
    <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
        OUR Services
      </Typography>
        </Flip>
<hr />
        <Fade bottom>
        <Typography variant="h6" component="div">
      At Driver Training Services - We Don’t Just Teach The Test
      </Typography>
        </Fade>

        <Fade bottom>
        <Typography>
      We have programs to precisely meet your needs, incorporating online theory, classroom training, behind-the-wheel instruction and simulator experience
      </Typography>
        </Fade>

      
      
      


      <br />
      <br />

      <Fade bottom>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      
{
  services.map(service => <SingleService
    id={service.id}
    services={service}
  ></SingleService>)
}
</Grid>
        </Fade>

      
    </Container>
  </Box>
);
};
  
export default Services;