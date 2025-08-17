import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Maxius Landing Page</title>
        <meta
          name="description"
          content="Maxius.io landing page clone using Next.js, responsive and animated"
        />
        <meta property="og:title" content="Maxius Landing Page" />
        <meta
          property="og:description"
          content="Maxius.io landing page clone with smooth animations and responsive design"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maxius Landing Page" />
        <meta
          name="twitter:description"
          content="Maxius.io landing page clone using Next.js"
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
