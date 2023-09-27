import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CategoryCard from "../cards/CategoryCard";

export default function Category() {
  return (
    <Box id="category" pt={8} pb={8}>
      <Container>
        <Typography color="primary.main" variant="h6" align="center">
          CATEGORY
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Choose your course by categories
        </Typography>
        <Typography pb={4} color="text.secondary" align="center" gutterBottom>
          The best way to learn is by using skills. Browse the available course
          categories, choose your favourite one and start learning
        </Typography>
        <CategoryCard />
      </Container>
    </Box>
  );
}
