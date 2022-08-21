import Head from 'next/head';
import Contact from '../components/Main/Contact';
import Footer from '../components/Main/Footer';
import Main from '../components/Main/Main';
import Projects from '../components/Main/Projects';
import Skills from '../components/Main/Skills';

export default function Home() {
  return (
    <div lang="en" className="bg-[#f0f0f0] px-3 md:px-10">
      <Head>
        <title>G. Sumanth Goud | Portfolio</title>
        <link rel="icon" href="/logo.jpg" />
        <meta
          name="description"
          content="Hey! G. Sumanth Goud from IIT Madras and here's my portfolio"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="G. Sumanth Goud" />
        <meta property="og:title" content="G. Sumanth Goud" />
        <meta
          property="og:description"
          content="Hey! G. Sumanth Goud from IIT Madras and here's my portfolio"
        />
        <meta property="og:url" content="https://vercel.com/dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" cont ent="G. Sumanth Goud" />
        <meta property="og:locale" content="en_US" />
        <meta itemProp="name" content="G. Sumanth Goud" />
        <meta
          itemProp="description"
          content="Hey! Iam G. Sumanth Goud and here's my portfolio"
        ></meta>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="border-x font-sans flex flex-col space-y-6 border-gray-400 shadow-xl bg-[#f0f0f0] selection:bg-gray-300">
        <Main />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
