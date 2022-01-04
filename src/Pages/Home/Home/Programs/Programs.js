
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Program from '../../Program/Program';

const Programs = () => {

  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch('https://pacific-headland-86912.herokuapp.com/programs')
      .then(res => res.json())
      .then(data => setPrograms(data));
  }, []);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
    <Container>
    <Flip right>
    <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
        OUR Individual Programs
      </Typography>
        </Flip>

       

        <Fade bottom>
        <Typography>
      We have programs to precisely meet your needs, incorporating online theory, classroom training, behind-the-wheel instruction and simulator experience
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
  </Box>
    </div>
  );
};

export default Programs;