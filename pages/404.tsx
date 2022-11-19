import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";

const ErrorPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Meta title="Not Found" />
      <NavBar />

      <Container sx={{ marginTop: "1rem" }}>
        <Paper sx={{ padding: "1rem", paddingTop: "4rem" }}>
          <Grid container>
            <Grid item md={8} xs={12}>
              <Typography
                variant="h1"
                fontSize="2.8rem"
                fontWeight="600"
                paddingTop={{ md: "2rem", xs: "none" }}
              >
                404 - Oh no, you found
                <br /> the Error page.
              </Typography>
              <Typography
                variant="h2"
                fontWeight="600"
                color="primary.A100"
                paddingTop="1rem"
              >
                "{router.asPath}" is not a page on
                <br /> syrianopensource.com.
              </Typography>
            </Grid>
            <Grid md={4} xs={12}>
              <Box padding="2rem">
                <img src="/404.svg" alt="sos" width="300" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Footer />
    </>
  );
};

export default ErrorPage;
