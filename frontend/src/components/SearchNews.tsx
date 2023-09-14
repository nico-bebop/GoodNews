import useNews from "../hooks/Search";
import Loading from "./Loading";
import Error from "./Error";
import { Article } from "./Article";
import {
  TextField,
  Container,
  Box,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export const SearchNews: React.FC = () => {
  const [keywords, setKeywords] = React.useState('');
  const { fetchNews, error, news, loading } = useNews();

  return (
    <>
      <Container sx={{ padding: { xs: '2rem', md: '2rem' } }}>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            Buscar
          </Typography>

          <TextField
            type="search"
            onChange={e => setKeywords(e.target.value)}
            onKeyUp={e => { if (e.key === 'Enter') { fetchNews(keywords) } }}
            placeholder="Escribe palabras clave..."
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
