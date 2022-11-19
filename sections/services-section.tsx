import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { ServiceCard } from "../components/service-card";

const services = [
  {
    title: "Technical Workshops",
    breif: "The Syrian Open Source platform is the first platform on GitHub.",
  },
  {
    title: "Technical Workshops",
    breif: "The Syrian Open Source platform is the first platform on GitHub.",
  },
  {
    title: "Technical Workshops",
    breif: "The Syrian Open Source platform is the first platform on GitHub.",
  },
];

export const ServicesSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Box>
        <Typography
          variant="h2"
          fontWeight="500"
          paddingTop="1.2rem"
          paddingBottom="1rem"
        >
          What We Do
        </Typography>
        <Divider sx={{ width: "120px" }} />
        <Typography paddingY="1.5rem" variant="h4" color="primary.A100">
          The Syrian Open Source platform is the first platform on GitHub
          dedicated to bringing Syrian developers from different cultures and
          experiences together, to work on projects in different languages,
          tasks, and versions.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item key={service.title} md={4} xs={12}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
