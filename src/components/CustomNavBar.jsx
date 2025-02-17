import React from "react";
import Avatar from '@mui/material/Avatar';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuthStore from "../context/authStore";

export function CustomNavBar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <AppBar position="static">
      <Toolbar>
      <Avatar
        alt="Dragonfly Ares"
        src="./dragonfly.svg"
        variant="square"
      />
      &nbsp;
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Dragonfly Ares</Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/">Gastos</Button>
            <Button color="inherit" component={Link} to="/income">Ingresos</Button>
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
