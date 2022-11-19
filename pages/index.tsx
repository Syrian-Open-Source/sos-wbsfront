import { Container, Divider } from "@mui/material";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { AboutSection } from "../sections/about-section";
import { HeroSection } from "../sections/hero-section";
import { ServicesSection } from "../sections/services-section";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <HeroSection />
        <Divider sx={{ marginY: "4rem" }} />
        <AboutSection />
        <Divider sx={{ marginY: "4rem" }} />
        <ServicesSection />
        {/* <Divider sx={{ marginY: "4rem" }} />
        <TeamSection /> */}
        <Divider sx={{ marginY: "4rem" }} />
        {/* <BlogSection /> */}
      </Container>
      <Footer />
    </>
  );
}
