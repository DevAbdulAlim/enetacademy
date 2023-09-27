import { Stack, Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function CenteredFooter(props) {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", pt: 8, pb: 8 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          flexWrap="wrap"
        >
          {props.links.map((item, index) => (
            <Link
              color="white"
              key={index}
              underline="none"
              to={item.href}
              component={RouterLink}
            >
              {item.name}
            </Link>
          ))}
        </Stack>

        <Stack
          pt="1.5rem"
          pb="1.5rem"
          direction="row"
          justifyContent="center"
          spacing="1rem"
        >
          {" "}
          {props.socials.map((item, index) => (
            <Link
              color="white"
              key={index}
              underline="none"
              to={item.link}
              component={RouterLink}
            >
              {item.icon}
            </Link>
          ))}
        </Stack>

        <Typography align="center">
          Copyright &copy; 2022 e-Network Academy by {props.company.name}
        </Typography>
      </Container>
    </Box>
  );
}
