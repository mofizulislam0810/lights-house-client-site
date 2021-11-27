import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddProduct from "../../Admin/AddProduct/AddProduct";
import AllOrders from "../../Admin/AllOrders/AllOrders";
import AllProduct from "../../Admin/AllProduct/AllProduct";
import MakeAdmin from "../../Admin/MakeAdmin/MakeAdmin";
import Payment from "../../Admin/Payment/Payment";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MyOrder from "../../MyOrder/MyOrder/MyOrder";
import Review from "../../Review/Review/Review";
import OpenDashboard from "../OpenDashboard/OpenDashboard";

const DashboardHome = () => {
  const { admin, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const history = useHistory();

  const handleLogOut = () => {
    logout();
    history.push("/");
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2 py-3 mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-danger">
                  DashBoard
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Link to={`${url}/myorder`}>
                    <button className="btn btn-outline-danger w-100">
                      My Order
                    </button>
                  </Link>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <Link to={`${url}/review`}>
                    <button className="btn btn-outline-danger w-100">
                      Review
                    </button>
                  </Link>
                </th>
              </tr>

              {admin && (
                <>
                  <tr>
                    <th scope="row">
                      <Link to={`${url}/allorder`}>
                        <button className="btn btn-outline-danger w-100">
                          All Orders
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={`${url}/allproduct`}>
                        <button className="btn btn-outline-danger w-100">
                          All Product
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={`${url}/payment`}>
                        <button className="btn btn-outline-danger w-100">
                          Payment
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={`${url}/addproduct`}>
                        <button className="btn btn-outline-danger w-100">
                          Add Product
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={`${url}/makeadmin`}>
                        <button className="btn btn-outline-danger w-100">
                          Make Admin
                        </button>
                      </Link>
                    </th>
                  </tr>
                </>
              )}
              <tr>
                <th scope="row">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline-danger w-100"
                  >
                    Log Out
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-10 py-2 mx-auto">
          <Switch>
            <Route exact path={`${path}/`}>
              <OpenDashboard></OpenDashboard>
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/allorder`}>
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/allproduct`}>
              <AllProduct></AllProduct>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
