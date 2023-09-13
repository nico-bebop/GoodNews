import useNews from "../hooks/news";
import Loading from "./Loading";
import Error from "./Error";
import { Article } from "./Article";
import {
  TextField,
  Container,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

export const Home: React.FC = () => {
  const { error, news, loading } = useNews();

  return (
    <>
      <Container sx={{ padding: { xs: '2rem', md: '2rem' } }}>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            Filter by keywords
          </Typography>

          <TextField
            type="search"
            placeholder="I'm searching for..."
            variant="outlined"
            sx={{
              my: "1rem",
              maxWidth: "30rem",
            }}
            fullWidth
            size="small"
          />
        </Box>

        {loading && <Loading />}
        {error && <Error error={error} />}

        <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
          Results:{" "}
          {news?.length}
        </Typography>

        <Grid container spacing={3} my={1}>
          {news?.map((item, index) => (
            <Article key={index} data={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
