import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";
export const AboutSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <Box padding="1rem">
            <img src="/illustrations/about.svg" alt="sos" height="300" />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography
            variant="h2"
            fontSize="2.4rem"
            fontWeight="500"
            paddingTop={{ md: "3rem", xs: "none" }}
          >
            About Syrian Open Source
          </Typography>
          <Typography paddingTop="1.5rem" variant="body1" fontWeight="300">
            We works to attract Syrian developers to contribute more under one
            platform to open source software, work on it, and issue it with high
            quality and advanced engineering features, which It stimulates the
            dissemination of the open-source concept in the Syrian software
            community, and also contributes to raising the efficiency of
            developers by working on distributed systems and teams.
          </Typography>

          <Box paddingTop="1rem" marginLeft="-1rem">
            <CustomLink
              href="/about"
              variant="body2"
              fontWeight="700"
              color="primary"
            >
              Learn More About Us.
            </CustomLink>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
