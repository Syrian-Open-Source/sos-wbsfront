import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { CustomLink } from "./custom-link";
import { SocialContact } from "./social-contact";

export const Footer = () => {
  return (
    <Container
      sx={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <Divider />
      <Paper sx={{ paddingTop: "2rem" }}>
        <Grid container spacing={2} flexWrap="wrap-reverse">
          <Grid item md={6}>
            <Box paddingY="1rem">
              <Typography component="image">
                <img src="/sos-logo.png" width="150px" alt="sos" />
              </Typography>
              <Typography
                variant="h4"
                color="primary.A100"
                fontWeight="500"
                paddingY="1rem"
              >
                We are a culture that we want to spread in regions that are not
                interested in participating in open source software.
              </Typography>
            </Box>
            <Box marginLeft="-0.4rem">
              <SocialContact />
            </Box>

            <Box paddingTop="2rem">
              <Typography variant="body2" color="primary.A100">
                All rights reserved &copy; Syrian Open Source{" "}
                {new Date().getFullYear()}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box fontFamily="Nunito">
              <List>
                <ListItem>
                  <Typography variant="h4" fontWeight="600">
                    General
                  </Typography>
                </ListItem>
                <CustomLink href="/transparency">Mission</CustomLink>
                <CustomLink href="/transparency">Privacy policy</CustomLink>
                <CustomLink href="/transparency">Terms of use</CustomLink>
              </List>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box fontFamily="Nunito">
              <List>
                <ListItem>
                  <Typography variant="h4" fontWeight="600">
                    Sitemap
                  </Typography>
                </ListItem>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/blog">Blog</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/team">Team</CustomLink>
                <CustomLink href="/sitemap.xml">Sitemap.xml</CustomLink>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
