import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CourseCard from "../cards/CourseCard";

export default function Course() {
  return (
    <Box sx={{ pt: 7, pb: 7 }}>
      <Container>
        <Typography variant="h6" align="center">
          POPULAR COURSES
        </Typography>
        <Typography variant="h5" align="center">
          Browse our popular courses
        </Typography>
        <Typography variant="p" align="center">
          Here are our popular course you might want to learn from your tutor.
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Button>View all</Button>
        </Stack>
        <CourseCard />
      </Container>
    </Box>
  );
}
