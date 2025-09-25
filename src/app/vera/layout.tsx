
import { Container } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Monarch Butterfly",
  description: "Danaus plexippus",
  icons:{
    icon: '/favicon.png'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <Container
        style={{
          margin: 0,
          minHeight: "100vh",
          minWidth:"100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f3a89",
        }}
      >
          {children}
      </Container>
  );
}
