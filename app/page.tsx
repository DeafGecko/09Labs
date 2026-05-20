import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsHorizontal from "./components/ProjectsHorizontal";
import About from "./components/About";
import Stack from "./components/Stack";
import Lab from "./components/Lab";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <main className="relative snap-y snap-proximity scroll-smooth">
        <Hero />
        <ProjectsHorizontal />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}