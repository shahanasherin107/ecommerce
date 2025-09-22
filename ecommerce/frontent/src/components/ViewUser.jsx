import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

export const ViewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:3004/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:3004/users/${id}`)
        .then(() => {
          alert("User deleted!");
          fetchUsers();
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <Admin />
      <br /><br />
      <h2>Registered Users</h2>

      <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>User Type</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.Phone}</TableCell>
                <TableCell>{user.userType}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

