import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
  Box,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = () => {
    axios.get("http://localhost:3004/wishlist")
      .then((res) => setWishlist(res.data))
      .catch((err) => console.error("Error fetching wishlist:", err));
  };




 const deleteWishlistItem = (id) => {
    axios.delete(`http://localhost:3004/wishlist/${id}`)
      .then(() => {
        alert("Item removed from Wishlist!");
        fetchWishlist(); 
      })
      .catch((err) => console.error("Error deleting wishlist:", err));
  };

   const addToCart = (product) => {
    axios.post("http://localhost:3004/addcart", product)
      .then(() => alert("Added to Cart!"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
          My Wishlist
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {wishlist.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val._id}>
            <Card  sx={{
                height: "100%",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}>
              <CardMedia
                sx={{ height: 220 }}
                image={val.Image}
                title="Product image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {val.ProductName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary",mb:1 }}>
                  {val.Description}
                </Typography>
                <Typography variant="h6" sx={{ color: "var(--color-primary)" }}>
                  ₹{val.Price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--color-accent)",
                    "&:hover": { backgroundColor: "var(--color-highlight)" },
                  }}
                  onClick={() => deleteWishlistItem(val._id)}
                >
                  <DeleteOutlineOutlinedIcon /> Remove
                </Button>
                <Button  variant="contained"
                  sx={{
                    backgroundColor: "var(--color-accent)",
                    "&:hover": { backgroundColor: "var(--color-highlight)" },
                  }} onClick={() => addToCart(val)}>add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Wishlist;
