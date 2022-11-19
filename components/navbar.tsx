import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import ButtonToggle from "./button-toggle";
import { CustomLink } from "./custom-link";
import ThemeToggle from "./theme-toggle";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },

  {
    name: "Team",
    url: "/team",
  },
  {
    name: "Projects",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

interface Props {
  window?: () => Window;
}

export const NavBar = (props: Props) => {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        paddingY="2rem"
        paddingX="1.5rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <img src="/sos-logo.png" width="150px" alt="sos" />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
          }}
        >
          <CloseIcon fontSize="large" color="primary" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {items.map((item) => (
          <Box key={item.name}>
            <ListItem disablePadding>
              {/* <Link href={item.url}> */}
              <Box
                onClick={() => {
                  router.push(item.url);
                }}
                width="100%"
              >
                <ListItemButton
                  sx={{ paddingX: "1.5rem", paddingY: "0.8rem" }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Box>
              {/* </Link> */}
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
      <Box paddingY="2rem">
        <ButtonToggle />
      </Box>

      <Box paddingY="1rem">
        <Typography variant="h4" fontWeight="500">
          All rights reserved &copy; Syrian Open Source{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      component="header"
      marginX={{ md: "1.8rem", xs: "0" }}
      paddingTop="1rem"
    >
      <AppBar
        position="relative"
        component="nav"
        sx={{
          background: "transparent",
          display: "flex",
          height: "110px",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={3} xs={6}>
              <Box ml={2}>
                <img src="/sos-logo.png" width="150px" alt="sos" />
              </Box>
            </Grid>
            <Grid md={5}>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                justifyContent="space-between"
              >
                <List sx={{ display: "flex" }}>
                  {items.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.url}
                      fontWeight="700"
                    >
                      {item.name}
                    </CustomLink>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid md={2} xs={6}>
              <Box display={{ md: "block", xs: "none" }}>
                <ThemeToggle />
              </Box>
              <Box display={{ md: "none", xs: "flex" }} justifyContent="right">
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <DehazeIcon fontSize="large" color="primary" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          transitionDuration={500}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            elevation: 2,
            sx: {
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
