import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const ViewOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/order")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Admin />
      <br /><br /><h2>All Orders</h2>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item xs={12} key={order._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  User: {order.userId?.Name} ({order.userId?.Email})
                </Typography>
                <Typography variant="body1">
                  Total Amount: ₹{order.totalAmount}
                </Typography>
                <Typography variant="body2">
                  Ordered On: {new Date(order.createdAt).toLocaleString()}
                </Typography>
                <ul>
                  {order.products.map((p, idx) => (
                    <li key={idx}>
                      {p.ProductName} - ₹{p.Price} x {p.Quantity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewOrder;

