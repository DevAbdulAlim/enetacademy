import { Fragment } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function Feature() {
  return (
    <Fragment>
      <Box sx={{ pt: 8, pb: 8 }}>
        <Container>
          <Grid container direction="column" spacing={4}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="cneter"
              spacing={4}
            >
              <Typography variant="h4">
                Turn your idea into a startup
              </Typography>
              <Typography variant="p">
                We're constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play
              </Typography>
            </Stack>

            <Grid item>a</Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
