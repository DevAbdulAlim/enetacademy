import { Button, Card, Grid, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    d1: "Web Design",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 2,
    d1: "Business analytics",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 3,
    d1: "Photography",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 4,
    d1: "Video creating",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 5,
    d1: "Health & fitness",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 6,
    d1: "Marketing",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 7,
    d1: "Finances & sales",
    d2: "Choose thousands of Web design online course",
  },
  {
    id: 8,
    d1: "Graphic desing",
    d2: "Choose thousands of Web design online course",
  },
];
export default function CategoryCard() {
  return (
    <Grid container spacing={4}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: 200 }}>
            <Typography variant="h5">{item.d1}</Typography>
            <Typography>{item.d2}</Typography>
            <Button variant="contained">Learn More</Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
