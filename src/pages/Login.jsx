import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import useAuthStore from "../context/authStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = await login(email, password);
    if (!error) navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Iniciar sesión</Typography>
      <form onSubmit={handleLogin}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Ingresar</Button>
      </form>
    </Container>
  );
}

export default Login;