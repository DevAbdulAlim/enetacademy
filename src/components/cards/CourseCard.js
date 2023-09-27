import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

//image
import webDesing from "../../static/images/courses/web-design.webp";
import webDevelopment from "../../static/images/courses/web-development.jpeg";
import graphicsDesign from "../../static/images/courses/graphics-design.png";

const images = [webDesing, webDevelopment, graphicsDesign];

const courses = [
  {
    id: 1,
    name: "Web Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 200,
  },
  {
    id: 1,
    name: "Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 250,
  },
  {
    id: 1,
    name: "Graphics Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 150,
  },
];

export default function CourseCard() {
  return (
    <Grid container spacing={4}>
      {courses.map((course, id) => {
        const Image = images[id];
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="200" src={Image} />
              <Typography pl={2} pr={2} pt={2} variant="h4" gutterBottom>
                {course.name}
              </Typography>
              <Stack
                pl={2}
                pr={2}
                pb={2}
                sx={{ height: "180px" }}
                direction="column"
                justifyContent="space-between"
              >
                <Typography
                  sx={{ overflow: "hidden" }}
                  color="text.secondary"
                  variant="p"
                >
                  {course.description}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="space-around"
                >
                  <Typography variant="h6">$ {course.price}</Typography>
                  <Button variant="contained">See Details</Button>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
