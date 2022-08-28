import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import StatsCard from "../cards/StatsCard";

export default function Stats() {
  return (
    <Fragment>
      <Box sx={{ pt: 7, pb: 7 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Our global class is open for all
          </Typography>
          <Typography variant="p" component="p" align="center" gutterBottom>
            The best way to learn is by using skills. That's why every class has
            a project that lets you practice and get feedback.
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Button variant="contained">Explore More</Button>
          </Stack>
          <br />
          <StatsCard />
        </Container>
      </Box>
    </Fragment>
  );
}
