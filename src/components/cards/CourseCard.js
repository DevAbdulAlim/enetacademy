import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const courses = [
  {
    id: 1,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 5,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 6,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 7,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 8,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export default function CourseCard() {
  return (
    <Grid container spacing={4}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia></CardMedia>
            <CardContent>
              <Typography variant="h4">{course.name}</Typography>
              <Typography variant="p">{course.description}</Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
