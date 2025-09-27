"use client";

import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/next"
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
