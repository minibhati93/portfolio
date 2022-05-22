import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/main/Introduction';
import Career from '../components/main/Career';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Career />
      </main>
      <Footer />
    </>
  );
}
