import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { getTeam } from "../../api";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Member } from "../../components/team-member";
import { TeamMember } from "../../types/team-member";
// const team = [
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpeg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpeg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpeg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpg",
//   },
//   {
//     username: "hasanahmad",
//     name: "Hasan Ahmad",
//     title: "Software Engineer",
//     image: "/hasan.jpeg",
//   },
// ];
interface TeamProps {
  team: TeamMember[];
}
const Team: NextPage<TeamProps> = ({ team }) => {
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Paper>
          <Box marginBottom="1rem">
            <Typography
              variant="h1"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              Syrian Open Source Team
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              We are help the developer to improve their experience and let them
              know more about open source community and open source software
              development, so we invite you to follow out platform pages: on
              facebook: Syrian Open Source and linked in : Syrian Open Source
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {team.map((member) => (
              <Grid item key={member.id} md={3} xs={12}>
                <Member member={member} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const team = await getTeam();
  return {
    props: {
      team: team || null,
    },
  };
}

export default Team;
