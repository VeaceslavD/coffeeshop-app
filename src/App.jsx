import classes from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Menu from './routes/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetails from './routes/ProductDetails/ProductDetails';


function App() {
  return (
    <div className={classes.App}>
      <div className={classes.appContainer}>
        <BrowserRouter>
          <Header />
        
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/menu' Component={Menu} />
            <Route path='/details/product/:id' Component={ProductDetails} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
