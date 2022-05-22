import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/main/Introduction';
import Career from '../components/main/Career';
import Blog from '../components/main/Blog';
import Skills from '../components/main/Skills';
import Connect from '../components/main/Connect';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Blog />
        <Career />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
