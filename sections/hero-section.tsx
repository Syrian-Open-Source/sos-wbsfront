import { Box, Grid, Paper, styled, Typography } from "@mui/material";

export const ImageStyle = styled("img")(({ theme }) => ({
  width: "260px",
  [theme.breakpoints.down("sm")]: {
    width: "230px",
  },
}));

export const HeroSection = () => {
  return (
    <Paper
      sx={{
        borderRadius: "0",
        padding: "1rem",
        paddingTop: "6rem",
      }}
    >
      <Grid container flexWrap="wrap-reverse" spacing={2}>
        <Grid item md={8} xs={12}>
          <Typography
            variant="h2"
            fontSize="2.5rem"
            fontWeight="500"
            paddingTop="1.6rem"
          >
            An open source platform that contains everything that was launched
            by Syrian developers.
          </Typography>
          <Typography variant="body1" paddingY="1.5rem" fontWeight="300">
            The Syrian Open Source platform is the first platform on GitHub
            dedicated to bringing Syrian developers from different cultures and
            experiences together, to work on projects in different languages,
            tasks, and versions.
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box textAlign="center">
            <ImageStyle
              src="/illustrations/hero.svg"
              alt="syrian-open-source"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
