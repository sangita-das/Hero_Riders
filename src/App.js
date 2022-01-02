import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Home/Services/Services';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageService from './Pages/Dashboard/ManageService/ManageService';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/Home/Home/About/About';
import BookingModal from './Pages/Dashboard/BookingModal/BookingModal';
import { Dashboard } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>


          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          {/* <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute> */}

          {/* <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/orderStatus">
            <OrderStatus />
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/updateUser/:id">
            <UpdateUser />
          </PrivateRoute> */}

          
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          
          {/* <Route exact path="/reviews">
            <Reviews />
          </Route> */}
          {/* <PrivateRoute exact path="/addItems">
            <AddItems />
          </PrivateRoute> */}
          {/* <Route exact path="/reviewBox">
            <ReviewBox />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
         
          <Route path="/bookingModal">
            <BookingModal/>
          </Route>
          <PrivateRoute path="/manageService/:serviceId">
            <ManageService />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>



          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
