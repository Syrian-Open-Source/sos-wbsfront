import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

const About: NextPage = () => {
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Paper>
          <Box>
            <Typography
              variant="h1"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              About Syrian Open Source (SOS)
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              The Syrian Open Source platform is the first platform on GitHub
              dedicated to bringing Syrian developers from different cultures
              and experiences together, to work on projects in different
              languages, tasks, and versions, and works to attract Syrian
              developers to contribute more under one platform to open source
              software, work on it, and issue it with high quality and advanced
              engineering features, which It stimulates the dissemination of the
              open-source concept in the Syrian software community, and also
              contributes to raising the efficiency of developers by working on
              distributed systems and teams.
            </Typography>
            <Typography
              variant="h2"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              Our Vision
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              We are help the developer to improve their experience and let them
              know more about open source community and open source software
              development, so we invite you to follow out platform pages: on
              facebook: Syrian Open Source and linked in : Syrian Open Source
            </Typography>
            <Typography
              variant="h2"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              Our Mission
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              We are not just a platform on GitHub, we are a culture that we
              want to spread in regions that are not interested in participating
              in open source software.
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default About;
