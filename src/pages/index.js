// The modules
import Layout from 'components/Layout';
import Header from 'components/site/Header';
import Footer from 'components/site/Footer';
import Hero from 'components/modules/Hero';

export default function Home(context) {
  return (
    <Layout preview={false}>
      <Header />
      <Hero />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}
