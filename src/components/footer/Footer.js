import { Stack, Box, Container, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#00968808", pt: 8, pb: 8 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Link to="/" component={RouterLink}>
            Home
          </Link>
          <Link to="/about" component={RouterLink}>
            About
          </Link>
          <Link to="/about" component={RouterLink}>
            Courses
          </Link>
          <Link to="/about" component={RouterLink}>
            Career
          </Link>
          <Link to="/about" component={RouterLink}>
            Faq
          </Link>
          <Link to="/about" component={RouterLink}>
            Contact
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
