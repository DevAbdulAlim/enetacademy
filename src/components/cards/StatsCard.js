import { Card, Grid, Typography } from "@mui/material";
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
            <Card>
              <AccountBalanceIcon />
              <Typography variant="h4">{item.p1}</Typography>
              <Typography variant="h6">{item.p2}</Typography>
              <Typography variant="p">{item.p3}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
