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

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>


          {/* <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute> */}
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

          {/* <PrivateRoute path="/pay">
            <Pay />
          </PrivateRoute> */}
          {/* <Route path="/home">
            <Home />
          </Route> */}
          {/* <Route exact path="/products">
            <Products />
          </Route> */}
          
          {/* <Route exact path="/reviews">
            <Reviews />
          </Route> */}
          {/* <PrivateRoute exact path="/addItems">
            <AddItems />
          </PrivateRoute> */}
          {/* <Route exact path="/reviewBox">
            <ReviewBox />
          </Route> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          {/* <PrivateRoute path="/manageOrder/:productId">
            <ManageOrder />
          </PrivateRoute> */}
          {/* <Route path="/register">
            <Register />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>



          {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
