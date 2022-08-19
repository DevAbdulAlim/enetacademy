import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import header from "../../static/images/header.jpg";

export default function Header() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#00968861", pt: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
              <Typography variant="h3">Learn new skills</Typography>
              <Typography variant="h4" gutterBottom>
                gain more experience
              </Typography>
              <Typography variant="p" gutterBottom>
                Our mission is to spread education that is easy accessible and
                everyone can learn.
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Button variant="contained" sx={{ backgroundColor: "#009688" }}>
                  Browse our courses
                </Button>
              </Stack>
            </Grid>
            <Grid item sm={12} md={6}>
              <CardMedia
                component="img"
                height="400"
                image={header}
                sx={{
                  clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              ></CardMedia>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
