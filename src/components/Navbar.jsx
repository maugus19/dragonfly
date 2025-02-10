import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuthStore from "../context/authStore";

function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>PWA Gastos</Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/">Inicio</Button>
            <Button color="inherit" component={Link} to="/reports">Reportes</Button>
            <Button color="inherit" onClick={logout}>Cerrar sesión</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;