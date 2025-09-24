"use client";

import { Button, Typography, Container } from "@mui/material";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hola desde Next.js + Material UI 🎉
      </Typography>
      <Button variant="contained" color="primary">
        Botón MUI
      </Button>
    </Container>
  );
}
