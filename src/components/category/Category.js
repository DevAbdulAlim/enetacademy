import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CategoryCard from "../cards/CategoryCard";

export default function Category() {
  return (
    <Box>
      <Container>
        <Typography variant="h6" align="center">
          CATEGORY
        </Typography>
        <Typography variant="h3" align="center">
          Choose your course by categories
        </Typography>
        <Typography variant="p" align="center">
          The best way to learn is by using skills. Browse the available course
          categories, choose your favourite one and start learning
        </Typography>
        <CategoryCard />
      </Container>
    </Box>
  );
}
