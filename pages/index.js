import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/main/Introduction';
import Blog from '../components/main/Blog';
import Skills from '../components/main/Skills';
import Connect from '../components/main/Connect';
import About from '../components/main/About';
import Talks from '../components/main/Talks';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Talks />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
