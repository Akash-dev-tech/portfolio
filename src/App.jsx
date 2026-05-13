import Hero from './components/Hero';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact /> 
    </Layout>
  );
}

export default App;