import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/main/Introduction';
import Blog from '../components/main/Blog';
import Skills from '../components/main/Skills';
import Connect from '../components/main/Connect';
import About from '../components/main/About';
import Talks from '../components/main/Talks';

export default function Home({ publications }) {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Blog publications={publications} />
        <Talks />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

/**
 * Method used to fetch data from Hashnode.
 * @param {Object} context
 * @returns props
 */
export async function getServerSideProps(context) {
  const res = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '310d383c-e9a8-4269-bea6-480cbb71fe7f',
    },
    body: JSON.stringify({
      query:
        'query {user(username: "minibhati93") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
    }),
  });
  const publications = await res.json();

  if (!publications) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      publications,
    },
  };
}
