import { Container, Paper, Typography } from "@mui/material";
import { NextPage } from "next";

import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";

const Transparency: NextPage = () => {
  return (
    <>
      <Meta title="Transparency | Hasan Ahmad" />
      <NavBar />
      <Container sx={{ marignTop: "2rem" }}>
        <Paper sx={{ padding: "1rem", marginTop: "1rem", textAlign: "center" }}>
          <Typography variant="h2" fontWeight="700">
            This page is under construction
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Transparency;
