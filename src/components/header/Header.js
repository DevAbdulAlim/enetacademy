import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import header from "../../static/images/header.webp";

export default function Header() {
  return (
    <Fragment>
      <Box pt={8} pb={8}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
            spacing={4}
          >
            <Grid
              sx={{ marginTop: { xs: "0", md: "4rem" } }}
              item
              sm={12}
              md={6}
            >
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="h3"
              >
                Learn new skills
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                mb={4}
                variant="h4"
                gutterBottom
              >
                gain more experience
              </Typography>
              <Typography
                color="text.secondary"
                component="p"
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="p"
                gutterBottom
              >
                Our mission is to spread education that is easy accessible and
                everyone can learn.
              </Typography>
              <Stack
                mt={3}
                direction="row"
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <Button variant="outlined">Browse our courses &gt;</Button>
              </Stack>
            </Grid>
            <Grid item sm={12} md={6}>
              <CardMedia component="img" height="400px" image={header} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
