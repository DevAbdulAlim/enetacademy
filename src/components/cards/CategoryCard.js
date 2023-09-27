import { Button, Stack, Card, Grid, Typography, Paper } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";

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
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
    >
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ padding: "2rem", backgroundColor: "#1976d20d" }}>
            <Stack pb={3} justifyContent="center" alignItems="center">
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  borderRadius: "1rem",
                  height: "65px",
                  width: "65px",
                  backgroundColor: "#1565c0",
                }}
              >
                <ComputerIcon
                  sx={{
                    fontSize: "2.5rem",
                    textAlign: "center",
                    color: "white",
                  }}
                />
              </Stack>
            </Stack>

            <Typography align="center" variant="h5" gutterBottom>
              {item.d1}
            </Typography>
            <Typography
              sx={{ overflow: "hidden" }}
              color="text.secondary"
              align="center"
              gutterBottom
            >
              {item.d2}
            </Typography>
            <Stack>
              <Button>See Course &gt;&gt;</Button>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
