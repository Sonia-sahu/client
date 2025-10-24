import React from "react";
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "grey.900",
        color: "white",
        py: 4,
        px: 2,
        mt: "auto",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {/* Left: Branding and Copyright */}
        <Box textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" fontWeight={600}>
            DevConnector
          </Typography>
          <Typography variant="body2">
            &copy; Fractal {new Date().getFullYear()} — All rights reserved.
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Stack direction="row" spacing={3}>
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy
          </Link>
        </Stack>

        {/* Right: Social Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            color="inherit"
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            color="inherit"
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
          <IconButton href="https://github.com" target="_blank" color="inherit">
            <GitHub />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
