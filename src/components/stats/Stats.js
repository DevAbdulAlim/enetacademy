import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import StatsCard from "../cards/StatsCard";

export default function Stats() {
  return (
    <Fragment>
      <Box id="about" sx={{ backgroundColor: "#f1f8ff" }} pt={4} pb={4}>
        <Container>
          <Typography color="primary.main" variant="h6" align="center">
            ABOUT
          </Typography>
          <Stack spacing={2}>
            <Typography variant="h4" align="center">
              Our global class is open for all
            </Typography>
            <Typography color="text.secondary" align="center">
              The best way to learn is by using skills. That's why every class
              has a project that lets you practice and get feedback.
            </Typography>
            <Stack
              pb={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button variant="contained">Explore More</Button>
            </Stack>
          </Stack>

          <br />
          <StatsCard />
        </Container>
      </Box>
    </Fragment>
  );
}
