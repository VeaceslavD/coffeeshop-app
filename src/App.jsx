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
import UserDetails from './routes/UserDetails/UserDetails';
import ManageUsers from './routes/ManageUsers/ManageUsers';
import EditUser from './routes/EditUser/EditUser';
import ViewUser from './routes/ViewUser/ViewUser';
import MyAccountLayout from './routes/MyAccountLayout/MyAccountLayout';
import ViewUserOrderDetails from './routes/ViewUserOrderDetails/ViewUserOrderDetails';
import ManageProducts from './routes/ManageProducts/ManageProducts';
import EditProduct from './routes/EditProduct/EditProduct';
import AboutUs from './routes/AboutUs/AboutUs';
import ContactUs from './routes/ContactUs/ContactUs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App() {
  return (
    <div className={classes.App}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about-us' Component={AboutUs} />
            <Route path='/contact-us' Component={ContactUs} />
            <Route path='/products/:category' Component={Products} />
            <Route path='/details/:id' Component={ProductDetails} />
            <Route path='/cart' Component={Cart} />
            <Route path='/favorite' Component={Favorite} />
            <Route path='/checkout' Component={Checkout} />
            <Route path='/confirmation/:id' Component={OrderConfirmation} />
            <Route path='/login' Component={Login} />
            <Route path='/sign-up' Component={SignUp} />
            <Route path='/my-account' Component={MyAccountLayout} >
              <Route path='/my-account' Component={MyAccount} />
              <Route path='/my-account/orders' Component={UserOrders} />
              <Route path='/my-account/orders/:id' Component={UserOrderDetails} />
              <Route path='/my-account/my-details' Component={UserDetails} />
            </Route>
            <Route path='/manage-users' Component={ManageUsers} />
            <Route path='/manage-users/editUser/:id' Component={EditUser} />
            <Route path='/manage-users/viewUser/:id' Component={ViewUser} />
            <Route path='/manage-users/viewUserOrder/:id' Component={ViewUserOrderDetails} />
            <Route path='/manage-products' Component={ManageProducts} />
            <Route path='/manage-products/editProduct/:id' Component={EditProduct} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
library.add(fab, fas, far)