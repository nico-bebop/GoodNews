import { IArticle } from "../models";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import defaultImage from "../assets/defaultImage.png"

export const Article = ({ data }: any & IArticle) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 500, height: 365, m: "0 auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.urlToImage ? data.urlToImage : defaultImage}
          title={data.title}
          component='img'
        />
        <CardContent sx={{ paddingTop: "0.5rem" }}>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center", color: "grey" }}
          >
            {new Date(data.publishedAt).toLocaleDateString("es-ar")}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              lineHeight: "1.2rem",
              mb: ".5rem",
              mt: ".5rem",
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ overflow: "hidden", height: "2.5rem" }}
          >
            {data.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={data.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="text"
              size="small"
              sx={{ fontWeight: "600" }}
            >
              Ir a la noticia
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
