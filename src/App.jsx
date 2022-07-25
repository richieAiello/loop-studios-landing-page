import Header from './components/header/Header';
import Interactive from './components/interactive/Interactive';
import Creations from './components/creations/Creations';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Interactive />
        <Creations />
      </main>
      <Footer />
    </>
  );
};

export default App;
