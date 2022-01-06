import { Container, Grid, Typography } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import SwipeableViews from 'react-swipeable-views';
import img1 from '../../../images/banner/Banner1.jpg';
import img2 from '../../../images/banner/car1.png';
import React, { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Program from '../Program/Program';

const Home = () => {

  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch('https://pacific-headland-86912.herokuapp.com/programs')
      .then(res => res.json())
      .then(data => setPrograms(data.slice(0, 3)));
  }, []);

  const styles = {
    slide: {
      padding: 0,
      marginBottom:0,
   
      minHeight: 400,
      color: '#fff',
    },
    slide1: {
     background: `url(${img1})`
     
    },
    slide2: {
      background:`url(${img2})`
    },
   
  };
  return (
    <div>
       <Banner></Banner>
       <About></About>
<Services></Services>

{/* ----------start our programs----------- */}
<Container>
    <Flip right>
    <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
        OUR Individual Programs
      </Typography>
        </Flip>

       

        <Fade bottom>
        <Typography>
      We have programs to precisely meet your needs, incorporating online theory, classroom training, behind-the-wheel instruction and simulator experience.
      </Typography>
        </Fade>
        <hr />
        <hr />
        <br />

      <br />
      <br />

      <Fade bottom>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:4 }}>

      
{
  programs.map(program => <Program
    id={program.id}
    program={program}
  ></Program>)
}

</Grid>
        </Fade>

      
    </Container>

    {/* ------------end Our programs----------- */}

<div>
    <h2 > Year New Collection</h2>
<SwipeableViews enableMouseEvents >

      <div style={Object.assign({}, styles.slide, styles.slide1)}>See the exclusive collection & latest Models In Our WebSite </div>
      
    </SwipeableViews>
</div>
       <Footer></Footer>
    </div>
  );
};

export default Home;