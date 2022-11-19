import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { TeamMember } from "../components/team-member";

const team = [
  {
    username: "hasanahmad",
    name: "Hasan Ahmad",
    title: "Software Engineer",
    image: "/hasan.jpg",
  },
  {
    username: "hasanahmad",
    name: "Hasan Ahmad",
    title: "Software Engineer",
    image: "/hasan.jpeg",
  },
  {
    username: "hasanahmad",
    name: "Hasan Ahmad",
    title: "Software Engineer",
    image: "/hasan.jpg",
  },
  {
    username: "hasanahmad",
    name: "Hasan Ahmad",
    title: "Software Engineer",
    image: "/hasan.jpeg",
  },
];

export const TeamSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Box>
        <Typography
          variant="h2"
          fontWeight="500"
          paddingTop="1.2rem"
          paddingBottom="1rem"
        >
          Our Team
        </Typography>
        <Divider sx={{ width: "120px" }} />
        <Typography paddingY="1.5rem" variant="h4" color="primary.A100">
          We are help the developer to improve their experience and let them
          know more about open source community and open source software
          development, so we invite you to follow out platform pages: on
          facebook: Syrian Open Source and linked in : Syrian Open Source
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {team.map((member) => (
          <Grid item key={member.username} md={3} xs={12}>
            <TeamMember member={member} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
