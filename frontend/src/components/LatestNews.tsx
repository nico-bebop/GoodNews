import * as React from 'react';
import useNews from "../hooks/TopHeadlines";
import Loading from "./Loading";
import Error from "./Error";
import { Article } from "./Article";
import {
  Container,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Selector from "./Selector";

export const LatestNews: React.FC = () => {
  const [country, setCountry] = React.useState('ar');
  const { error, news, loading } = useNews(country);

  return (
    <>
      <Container sx={{ padding: { xs: '2rem', md: '2rem' } }}>
        <Box>
          <Selector country={country} setCountry={setCountry} />
        </Box>

        {loading && <Loading />}
        {error && <Error error={error} />}

        <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
          Resultados:{" "}
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
