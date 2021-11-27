import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register/Register";
import Home from "./Pages/Home/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ExploreProductsHome from "./Pages/ExploreProducts/ExploreProductsHome/ExploreProductsHome";
import ProductDetail from "./Pages/ProductDetail/ProductDetail/ProductDetail";
import Order from "./Pages/Order/Order/Order";
import Footer from "./Pages/Footer/Footer/Footer";
import LoginHome from "./Pages/Login/LoginHome/LoginHome";
import RegisterHome from "./Pages/Register/RegisterHome/RegisterHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreAllProduct">
              <ExploreProductsHome></ExploreProductsHome>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/product/:productId">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <Route path="/order/:productId">
              <Order></Order>
            </Route>
            <Route path="/login">
              <LoginHome></LoginHome>
            </Route>
            <Route path="/register">
              <RegisterHome></RegisterHome>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
