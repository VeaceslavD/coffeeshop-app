import classes from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Products from './routes/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Cart from './routes/Cart/Cart';
import Favorite from './routes/Favorite/Favorite';
import Checkout from './routes/Checkout/Checkout';
import OrderConfirmation from './routes/OrderConfirmation/OrderConfirmation';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';
import MyAccount from './routes/MyAccount/MyAccount';
import UserOrders from './routes/UserOrders/UserOrders';
import UserOrderDetails from './routes/UserOrderDetails/UserOrderDetails';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import UserDetails from './routes/UserDetails/UserDetails';
import ManageUsers from './routes/ManageUsers/ManageUsers';
import EditUser from './routes/EditUser/EditUser';
import ViewUser from './routes/ViewUser/ViewUser';


function App() {
  return (
    <div className={classes.App}>
      <div className={classes.appContainer}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/products/:category' Component={Products} />
            <Route path='/details/:id' Component={ProductDetails} />
            <Route path='/cart' Component={Cart} />
            <Route path='/favorite' Component={Favorite} />
            <Route path='/checkout' Component={Checkout} />
            <Route path='/confirmation/:id' Component={OrderConfirmation} />
            <Route path='/login' Component={Login} />
            <Route path='/sign-up' Component={SignUp} />
            <Route path='/my-account' Component={MyAccount} />
            <Route path='/my-account/orders' Component={UserOrders} />
            <Route path='/my-account/orders/:id' Component={UserOrderDetails} />
            <Route path='/my-account/my-details' Component={UserDetails} />
            <Route path='/manage-users' Component={ManageUsers} />
            <Route path='/manage-users/editUser/:id' Component={EditUser} />
            <Route path='/manage-users/viewUser/:id' Component={ViewUser} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
library.add(fab, fas, far)