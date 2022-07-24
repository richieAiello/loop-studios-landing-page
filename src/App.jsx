import { ReactComponent as Logo } from './assets/react.svg';

const App = props => {
  return (
    <header>
      <h1 className="text-7xl">Tailwind, Vite, and SVGR Ready</h1>
      <Logo className="logo" />
    </header>
  );
};

export default App;
