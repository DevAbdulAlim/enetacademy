import { Card, Grid, Paper, Stack, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Fragment } from "react";

const data = [
  {
    id: 1,
    p1: "1000+",
    p2: "Online courses",
    p3: "Choose from over 1000+ online video courses",
  },
  {
    id: 2,
    p1: "1000+",
    p2: "Online courses",
    p3: "Choose from over 1000+ online video courses",
  },
  {
    id: 3,
    p1: "1000+",
    p2: "Online courses",
    p3: "Choose from over 1000+ online video courses",
  },
  {
    id: 4,
    p1: "1000+",
    p2: "Online courses",
    p3: "Choose from over 1000+ online video courses",
  },
];

export default function StatsCard() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: "1.5rem" }}>
              <Stack spacing={2}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: "60px",
                    width: "60px",
                    backgroundColor: "#1565c0",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                  <AccountBalanceIcon
                    sx={{
                      fontSize: "2.3rem",

                      color: "white",
                    }}
                  />
                </Stack>

                <Typography color="#1565c0" variant="h4">
                  {item.p1}
                </Typography>
                <Typography variant="h6">{item.p2}</Typography>
                <Typography color="text.secondary" variant="p">
                  {item.p3}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
