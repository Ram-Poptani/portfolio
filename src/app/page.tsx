import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills3DLoader from "@/components/Skills3DLoader";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollToTop />
      <Navbar />
      <main id="main">
        {/* Server-rendered SEO content for crawlers that don't execute JS */}
        <h1 className="sr-only">
          Ram Poptani — Full Stack Java Developer | Software Engineer Portfolio
        </h1>
        <p className="sr-only">
          Ram Poptani is a Full Stack Java Developer and Associate Consultant at
          Ernst &amp; Young (EY) in Mumbai, India, with 2.5+ years of experience
          building scalable microservices, REST APIs, and event-driven systems
          using Java, Spring Boot, Apache Kafka, React.js, Node.js, TypeScript,
          Docker, and Azure.
        </p>
        <Hero />
        <About />
        <Skills3DLoader />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
