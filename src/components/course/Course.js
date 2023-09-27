import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CourseCard from "../cards/CourseCard";

export default function Course() {
  return (
    <Box id="courses" sx={{ backgroundColor: "aliceblue" }} pt={8} pb={8}>
      <Container>
        <Typography color="primary.main" variant="h6" align="center">
          COURSES
        </Typography>
        <Stack spacing={2}>
          <Typography variant="h4" align="center">
            Browse our popular courses
          </Typography>
          <Typography color="text.secondary" align="center">
            Here are our popular course you might want to learn from your tutor.
          </Typography>
          <Stack pb={4} direction="row" justifyContent="center">
            <Button variant="outlined">View all &gt;&gt;</Button>
          </Stack>
        </Stack>

        <CourseCard />
      </Container>
    </Box>
  );
}
