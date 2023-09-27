import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import CustomizedAccordions from "./CustomizedAccordions";

export default function Faq() {
  return (
    <Fragment>
      <Box id="faq" pt="3rem" pb="3rem">
        <Container>
          <Typography color="primary.main" variant="h6" align="center">
            FAQ
          </Typography>
          <Typography pb={2} align="center" variant="h4" gutterBottom>
            Frequently asked questions
          </Typography>
          <CustomizedAccordions />
        </Container>
      </Box>
    </Fragment>
  );
}
