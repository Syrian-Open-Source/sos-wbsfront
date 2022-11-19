import { QrCode2Rounded } from "@mui/icons-material/";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getTeamMember } from "../../api";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { QR } from "../../components/qr";
import { SocialMember } from "../../components/social-member";
import ThemeToggle from "../../components/theme-toggle";
import Meta from "../../helpers/Meta";
import { TeamMember } from "../../types/team-member";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  textAlign: "center",
  p: 4,
};

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMember: NextPage<TeamMemberProps> = ({ member }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Meta title={member.attributes.name} />
      <NavBar />
      <Container maxWidth="lg" sx={{ marginY: "2rem" }}>
        <Paper variant="outlined" sx={{ padding: "2rem", textAlign: "center" }}>
          <Box marginBottom="5rem">
            <IconButton
              onClick={handleOpen}
              color="primary"
              size="large"
              sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                float: "left",
              }}
            >
              <QrCode2Rounded />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Paper sx={style} variant="outlined">
                <QR
                  url={`https://syrianopensource.com/${router.asPath.toString()}`}
                />
              </Paper>
            </Modal>
            <Box sx={{ float: "right" }}>
              <ThemeToggle />
            </Box>
          </Box>
          <Box>
            <img
              src={`http://localhost:1337${member.attributes.avatar.data.attributes.url}`}
              alt={member.attributes.avatar.data.attributes.name}
              width="180px"
              height="180px"
              style={{
                objectFit: "contain",
                borderRadius: "50%",
                border: "2px solid #ddd",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2" fontWeight="700">
              {member.attributes.name}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="600"
              color="primary.A100"
              paddingTop="1rem"
            >
              {member.attributes.title}
            </Typography>
          </Box>
          <Box paddingTop="1rem">
            <Link href={`mailto:${member.attributes.email}`}>
              <Typography variant="h4" sx={{ cursor: "pointer" }}>
                {member.attributes.email}
              </Typography>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" marginTop="1rem">
            <SocialMember member={member} />
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "2rem", marginTop: "1rem" }}>
          <Typography variant="h3" fontWeight="700" paddingBottom="1rem">
            Bio
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Box paddingY="1rem">
            <Typography variant="body1">{member.attributes.bio}</Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const member = await getTeamMember(params.username);

  if (!member) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      member: member || null,
    },
  };
}

export default TeamMember;
