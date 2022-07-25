import Header from './components/header/Header';
import Interactive from './components/interactive/Interactive';
import Creations from './components/creations/Creations';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Interactive />
        <Creations />
      </main>
    </>
  );
};

export default App;
