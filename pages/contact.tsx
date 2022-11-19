import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";
const ContactMe: NextPage = () => {
  return (
    <>
      <Meta title="Contact | Syrian Open Source" />
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Paper sx={{ padding: "1rem" }}>
          <Box>
            <Typography
              variant="h1"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              Contact Us
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              The Syrian Open Source platform is the first platform on GitHub
              dedicated to bringing Syrian developers from different cultures
              and experiences together, to work on projects in different
              languages.
            </Typography>
            <Stack spacing={3}>
              <Box display="flex" justifyContent="left" alignItems="center">
                <PhoneIcon />
                <Link href="tel:+971508838637" target="_blank">
                  <Typography paddingX="1rem">(+971) 50 883 8637</Typography>
                </Link>
              </Box>
              <Box display="flex" justifyContent="left" alignItems="center">
                <MailOutlineIcon />
                <Link href="mailto:hello@syrianopensource.com" target="_blank">
                  <Typography paddingX="1rem">
                    hello@syrianopensource.com
                  </Typography>
                </Link>
              </Box>
              <Box display="flex" justifyContent="left" alignItems="center">
                <LocationOnIcon />
                <Typography paddingX="1rem">Damascus, Syria</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography paddingY="2rem" variant="body1" fontWeight="300">
              We do our best to respond, but unfortunately we can't always
              respond to every email we receive. If you have a support request
              about our open source work, please open an issue on the GitHub
              repo instead. If you have a support need on other thing, please
              email the team <b>(hello@syrianopensource.com)</b>
            </Typography>
            <Stack spacing={3}>
              <TextField
                fullWidth
                type="text"
                label="Name"
                InputLabelProps={{ sx: { fontSize: "1rem" } }}
                size="small"
              />
              <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="Email"
                InputLabelProps={{ sx: { fontSize: "1rem" } }}
                size="small"
              />
              <TextField
                fullWidth
                type="text"
                label="Subject"
                InputLabelProps={{ sx: { fontSize: "1rem" } }}
                size="small"
              />
              <TextField
                fullWidth
                type="text"
                multiline
                rows="5"
                label="Message"
                InputLabelProps={{ sx: { fontSize: "1rem" } }}
              />
            </Stack>

            <Stack sx={{ my: 2 }}>
              <Button fullWidth size="large" type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default ContactMe;
