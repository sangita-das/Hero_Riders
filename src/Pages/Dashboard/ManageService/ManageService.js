import { Star } from '@mui/icons-material';
import { Alert, Button, CardContent, Grid, Link, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingModal from '../BookingModal/BookingModal';


const ManageService = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [OpenBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);


  const { serviceId } = useParams()
  const [serviceDetails, setServiceDetails] = useState([]);

  
  // all data load
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res => res.json())
      .then(data => setServiceDetails(data))
  }, []);
  return (
    <>
    <Grid >
      <Typography>Booking Service No:{serviceId}</Typography>
      {bookingSuccess && <Alert severity="success">Successfully booked your service!</Alert>}

      <Box className="mt-2 d-flex justify-content-center mb-5 pb-5">

        <Box >
          <Box >
            <img src={serviceDetails?.img} alt="" />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Service: {serviceDetails?.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
               {serviceDetails?.title}
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
              {serviceDetails?.speciality}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Service Details: {serviceDetails?.description}
            </Typography>
            <Typography variant="h5" >
              price: {serviceDetails?.price}
            </Typography>

            <Rating
              initialRating={Star}
              emptySymbol="far fa-star  "
              fullSymbol="fas fa-star "></Rating>

            <Box>
              <Button onClick={handleBookingOpen} sx={{ mx: "auto", width: 200 }} variant="outlined" size="small" color="primary">
                Click for booking
              </Button>
            </Box>

          </CardContent>
          <Box className="text-center">
            <Link href={`/services`}>
              <Button sx={{ mx: "auto", width: 200 }} variant="outlined" size="small" color="primary">
                Back to Services
              </Button>
            </Link>

          </Box>
        </Box>
      </Box>
    </Grid >

    <BookingModal
      // singleProduct={singleProduct}
      serviceDetails={serviceDetails}
      OpenBooking={OpenBooking}
      handleBookingClose={handleBookingClose}
      setBookingSuccess={setBookingSuccess}
    >
    </BookingModal>
  </>

  );
};

export default ManageService;