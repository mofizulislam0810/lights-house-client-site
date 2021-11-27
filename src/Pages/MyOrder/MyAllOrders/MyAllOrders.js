import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyAllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = user.email;
  useEffect(() => {
    setLoading(true);
    fetch(`https://cryptic-stream-18194.herokuapp.com/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://cryptic-stream-18194.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };
  if (loading) {
    return (
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="mx-5 mt-5">
      <h2 className="bg-danger bg-gradient shadow mt-2 fw-bold p-2 text-white">
        Our All Light
      </h2>
      <div
        className="container bg-trasparent my-3 p-3"
        style={{ position: "relative" }}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
          {orders.map((order) => (
            <div className="col">
              <div className="card h-100 shadow">
                {" "}
                <img
                  src={order.image}
                  className="card-img-top img-fluid mx-auto m-3 shadow"
                  style={{ width: "250px", height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <div className="clearfix mb-3">
                    {" "}
                    <span className="float-start badge rounded-pill bg-danger w-25">
                      {order.status}
                    </span>{" "}
                    <span className="float-end price-hp fw-bold">
                      Price: &#2547; {order.price}
                    </span>{" "}
                  </div>
                  <h6 className="card-title rounded-pill bg-danger fw-bold p-1 text-white">
                    Light Name: {order.productName.slice(0, 15)}...
                  </h6>
                  <h6 className="card-title rounded-pill bg-danger fw-bold p-1 text-white">
                    Email: {order.email}
                  </h6>
                  <h6 className="card-title rounded-pill bg-danger fw-bold p-1 text-white">
                    Phone: {order.phone}
                  </h6>
                  <h5 className="card-title">
                    {order.description.slice(0, 100)}...
                  </h5>
                  <div className="text-center my-4">
                    {" "}
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-outline-danger w-50 shadow"
                    >
                      Delete
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAllOrders;
